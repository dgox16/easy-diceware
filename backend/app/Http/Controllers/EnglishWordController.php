<?php

namespace App\Http\Controllers;

use App\Helpers\PasswordHelper;
use App\Http\Requests\GeneratePasswordRequest;
use App\Models\EnglishWord;
use Illuminate\Http\Request;
use Throwable;
use ZxcvbnPhp\Zxcvbn;

class EnglishWordController extends Controller
{
    public function uploadWords(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = PasswordHelper::readFile('words_english.txt', false);
            $totalAdded = count($data);

            if ($totalAdded == 0) {
                return response()->json([
                    'status' => true,
                    'message' => 'All the words are already in our database',
                ]);
            }

            EnglishWord::insert($data);
            return response()->json([
                'status' => true,
                'message' => 'Words uploaded successfully',
                'totalAdded' => $totalAdded
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function generatePassword(GeneratePasswordRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $words = EnglishWord::inRandomOrder()->take($request->count)->pluck('word');
            $password = PasswordHelper::addDelimiters($words, $request->type);
            $timeToCrack = PasswordHelper::calculateStrength($password, false);

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
