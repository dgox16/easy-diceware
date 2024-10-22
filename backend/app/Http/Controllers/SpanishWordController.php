<?php

namespace App\Http\Controllers;

use App\Http\Requests\GeneratePasswordRequest;
use App\Models\SpanishWord;
use Illuminate\Http\Request;
use App\Helpers\PasswordHelper;
use Illuminate\Http\JsonResponse;
use Throwable;

class SpanishWordController extends Controller
{
    public function uploadWords(Request $request): JsonResponse
    {
        try {
            $data = PasswordHelper::readFile('words_spanish.txt', true);
            $totalAdded = count($data);

            if ($totalAdded > 0) {
                SpanishWord::insert($data);
            }

            return response()->json([
                'status' => true,
                'message' => 'Words uploaded successfully',
                'total_added' => $totalAdded
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function generatePassword(GeneratePasswordRequest $request): JsonResponse
    {
        try {
            $words = SpanishWord::inRandomOrder()->take($request->count)->pluck('word');
            $password = PasswordHelper::addDelimiters($words, $request->type);
            $timeToCrack = PasswordHelper::calculateStrength($password, true);

            return response()->json([
                'status' => true,
                'password' => $password,
                'timeToCrack' => $timeToCrack
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
