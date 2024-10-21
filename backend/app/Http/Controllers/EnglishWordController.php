<?php

namespace App\Http\Controllers;

use App\Helpers\PasswordHelper;
use App\Http\Requests\GeneratePasswordRequest;
use App\Models\EnglishWord;
use Illuminate\Http\Request;

class EnglishWordController extends Controller
{
    public function uploadWords(Request $request): \Illuminate\Http\JsonResponse
    {

        $data = PasswordHelper::readFile('words_english.txt', false);

        $totalAdded = count($data);
        if ($totalAdded > 0) {
            EnglishWord::insert($data);
        }

        return response()->json([
            'status' => true,
            'message' => 'Words uploaded successfully',
            'total_added' => $totalAdded
        ]);
    }

    public function generatePassword(GeneratePasswordRequest $request): \Illuminate\Http\JsonResponse
    {
        $words = EnglishWord::inRandomOrder()->take($request->count)->pluck('word');
        $password = PasswordHelper::addDelimiters($words, $request->type);

        return response()->json([
            'status' => true,
            'password' => $password,
        ]);
    }
}
