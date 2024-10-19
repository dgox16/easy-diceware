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
        $filePath = base_path('words_english.txt');

        if (!file_exists($filePath)) {
            return response()->json(['status' => false, 'message' => 'File not found'], 404);
        }

        $wordsSet = [];
        $fileContents = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        foreach ($fileContents as $line) {
            $word = trim($line);
            if (!empty($word)) {
                $wordsSet[$word] = true;
            }
        }

        $existingWords = EnglishWord::whereIn('word', array_keys($wordsSet))->pluck('word')->toArray();

        $data = [];
        foreach (array_keys($wordsSet) as $word) {
            if (!in_array($word, $existingWords)) {
                $data[] = ['word' => $word];
            }
        }

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
