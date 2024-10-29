<?php

namespace App\Helpers;


use App\Enums\TypePassword;
use App\Models\EnglishWord;
use App\Models\SpanishWord;
use Exception;
use ZxcvbnPhp\Zxcvbn;

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
            TypePassword::CamelCase => $words->map(function ($word, $index) {
                return $index === 0 ? strtolower(trim($word)) : ucfirst(trim($word));
            })->implode(''),
            default => $words->implode(' '),
        };
    }

    public static function checkWordsToAdd($wordsToAdd, $isSpanish): array
    {
        if ($isSpanish) {
            $existingWords = SpanishWord::whereIn('word', $wordsToAdd)->pluck('word')->toArray();
        } else {
            $existingWords = EnglishWord::whereIn('word', $wordsToAdd)->pluck('word')->toArray();
        }

        $data = [];
        foreach ($wordsToAdd as $word) {
            if (!in_array($word, $existingWords)) {
                $data[] = ['word' => $word];  // Prepara el array para la inserción
            }
        }

        return $data;
    }

    /**
     * @throws Exception
     */
    public static function readFile($isSpanish): array
    {

        $file = $isSpanish ? 'words_spanish.txt' : 'words_english.txt';
        $filePath = base_path($file);

        if (!file_exists($filePath)) {
            throw new Exception('File not found');
        }

        $wordsSet = [];
        $fileContents = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        foreach ($fileContents as $line) {
            $word = trim($line);
            if (!empty($word)) {
                $wordsSet[] = $word;  // Cambiar a un array simple
            }
        }

        return $wordsSet;
    }

    /**
     * @throws Exception
     */
    public static function addWords($words, $isSpanish): array
    {
        $totalAdded = count($words);

        if ($totalAdded == 0) {
            throw new Exception('All the words are already in our database');
        }

        if ($isSpanish) {
            SpanishWord::insert($words);
        } else {
            EnglishWord::insert($words);
        }

        return [
            'status' => true,
            'message' => 'Words uploaded successfully',
            'totalAdded' => $totalAdded
        ];
    }

    private static function formatLittleTime($seconds, $isSpanish): string
    {
        if ($seconds < 1) {
            return $isSpanish ? 'Menos de un segundo' : 'Less than a second';
        }

        $units = [
            'months' => [
                'singular' => $isSpanish ? 'mes' : 'month',
                'plural' => $isSpanish ? 'meses' : 'months',
                'divider' => 2592000,  // 30 * 24 * 60 * 60
            ],
            'days' => [
                'singular' => $isSpanish ? 'día' : 'day',
                'plural' => $isSpanish ? 'días' : 'days',
                'divider' => 86400,  // 24 * 60 * 60
            ],
            'hours' => [
                'singular' => $isSpanish ? 'hora' : 'hour',
                'plural' => $isSpanish ? 'horas' : 'hours',
                'divider' => 3600,  // 60 * 60
            ],
            'minutes' => [
                'singular' => $isSpanish ? 'minuto' : 'minute',
                'plural' => $isSpanish ? 'minutos' : 'minutes',
                'divider' => 60,
            ],
            'seconds' => [
                'singular' => $isSpanish ? 'segundo' : 'second',
                'plural' => $isSpanish ? 'segundos' : 'seconds',
                'divider' => 1,
            ],
        ];

        foreach ($units as $data) {
            if ($seconds >= $data['divider']) {
                $value = intval($seconds / $data['divider']);
                return $value === 1 ? "1 " . $data['singular'] : "$value " . $data['plural'];
            }
        }

        return $seconds . ($isSpanish ? ' segundos' : ' seconds');
    }

    private static function formatLargeTime($years, $isSpanish): string
    {
        if ($years > 1e9) {
            return $isSpanish ? 'Más de mil millones de años' : 'More than a billion years';
        }

        $units = [
            'millions' => [
                'singular' => $isSpanish ? 'millón de años' : 'million of years',
                'plural' => $isSpanish ? 'millones de años' : 'millions of years',
                'divider' => 1e6
            ],
            'years' => [
                'singular' => $isSpanish ? 'año' : 'year',
                'plural' => $isSpanish ? 'años' : 'years',
                'divider' => 1
            ],
        ];

        foreach ($units as $data) {
            if ($years >= $data['divider']) {
                $value = intval($years / $data['divider']);
                return $value === 1 ? "1 " . $data['singular'] : "$value " . $data['plural'];
            }
        }

        return $years . ($isSpanish ? ' años' : ' years');
    }

    private static function formatTime($seconds, $isSpanish): string
    {
        if ($seconds < 31536000) {
            return self::formatLittleTime($seconds, $isSpanish);
        }
        $years = $seconds / (31536000);

        return self::formatLargeTime($years, $isSpanish);
    }

    public static function calculateStrength($password, $isSpanish): string
    {
        $zxcvbn = new Zxcvbn();
        $passwordStrength = $zxcvbn->passwordStrength($password);

        $timeToCrackSec = $passwordStrength['crack_times_seconds']['offline_fast_hashing_1e10_per_second'];
        return self::formatTime($timeToCrackSec, $isSpanish);
    }
}
