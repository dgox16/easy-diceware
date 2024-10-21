<?php

namespace App\Helpers;


use App\Enums\TypePassword;
use App\Models\EnglishWord;
use App\Models\SpanishWord;

class PasswordHelper
{
    public static function addDelimiters($words, $type)
    {
        $type = TypePassword::from($type);

        return match ($type) {
            TypePassword::Comma => $words->implode(','),
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
    public static function readFile($path, $isSpanish)
    {
        $filePath = base_path($path);

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

        if ($isSpanish) {
            $existingWords = SpanishWord::whereIn('word', array_keys($wordsSet))->pluck('word')->toArray();
        } else {
            $existingWords = EnglishWord::whereIn('word', array_keys($wordsSet))->pluck('word')->toArray();
        }

        $data = [];
        foreach (array_keys($wordsSet) as $word) {
            if (!in_array($word, $existingWords)) {
                $data[] = ['word' => $word];
            }
        }

        return $data;
    }
}
