<?php

namespace App\Http\Controllers;

use App\Http\Requests\GeneratePasswordRequest;
use App\Models\SpanishWord;
use Illuminate\Http\Request;
use App\Helpers\PasswordHelper;

class SpanishWordController extends Controller
{
    public function uploadWords(Request $request): \Illuminate\Http\JsonResponse
    {
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
    }

    public function generatePassword(GeneratePasswordRequest $request): \Illuminate\Http\JsonResponse
    {
        $words = SpanishWord::inRandomOrder()->take($request->count)->pluck('word');
        $password = PasswordHelper::addDelimiters($words, $request->type);

        return response()->json([
            'status' => true,
            'password' => $password,
        ]);
    }
}
