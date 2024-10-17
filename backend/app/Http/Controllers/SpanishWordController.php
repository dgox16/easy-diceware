<?php

namespace App\Http\Controllers;

use App\Http\Requests\GeneratePasswordRequest;
use App\Http\Requests\TypePassword;
use App\Models\SpanishWord;
use Illuminate\Http\Request;

function addDelimiters($words, $type)
{
    $type = TypePassword::from($type);

    return match ($type) {
        TypePassword::Comma => $words->implode(', '),
        TypePassword::Dash => $words->implode('-'),
        TypePassword::Underscore => $words->implode('_'),
        TypePassword::Period => $words->implode('.'),
        TypePassword::Slash => $words->implode('/'),
        TypePassword::Pipe => $words->implode('|'),
        TypePassword::PascalCase => $words->map(function ($word) {
            return ucfirst(trim($word));
        })->implode(''),
        TypePassword::CamelCase =>  $words->map(function ($word, $index) {
            return $index === 0 ? strtolower(trim($word)) : ucfirst(trim($word));
        })->implode(''),
        default => $words->implode(' '),
    };
}
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

    public function generatePassword(GeneratePasswordRequest $request): \Illuminate\Http\JsonResponse
    {
        $words = SpanishWord::inRandomOrder()->take($request->count)->pluck('word');

        $password = addDelimiters($words, $request->type);

        return response()->json([
            'status' => true,
            'password' => $password,
        ]);
    }
}
