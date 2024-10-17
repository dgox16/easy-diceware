<?php

namespace App\Http\Controllers;

use App\Models\SpanishWord;
use Illuminate\Http\Request;

class SpanishWordController extends Controller
{
    public function uploadWords(Request $request): \Illuminate\Http\JsonResponse
    {
        $filePath = base_path('words_spanish.txt');

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

        $data = [];
        foreach (array_keys($wordsSet) as $word) {
            if (!SpanishWord::where('word', $word)->exists()) {
                $data[] = ['word' => $word];
            }
        }

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
    public function generatePassword(Request $request): \Illuminate\Http\JsonResponse
    {
        $validatedData = $request->validate([
            'count' => 'required|integer|min:1|max:20',
            'delimiter' => 'nullable|string|max:5',
        ]);

        $numberOfWords = $validatedData['count'];

        $delimiter = $validatedData['delimiter'] ?? ' ';

        $words = SpanishWord::inRandomOrder()->take($numberOfWords)->pluck('word');

        $password = $words->implode($delimiter);

        return response()->json([
            'status' => true,
            'password' => $password,
        ]);
    }
}
