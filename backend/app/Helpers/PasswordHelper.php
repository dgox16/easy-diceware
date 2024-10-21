<?php

namespace App\Helpers;


use App\Enums\TypePassword;
use App\Models\EnglishWord;
use App\Models\SpanishWord;
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

    private static function formatLittleTime($seconds, $isSpanish)
    {
        if ($seconds < 1) {
            return $isSpanish ? 'Menos de un segundo' : 'Less than a second';
        }

        $units = [
            'years' => [
                'singular' => $isSpanish ? 'año' : 'year',
                'plural' => $isSpanish ? 'años' : 'years',
                'divider' => 365 * 24 * 60 * 60,
            ],
            'months' => [
                'singular' => $isSpanish ? 'mes' : 'month',
                'plural' => $isSpanish ? 'meses' : 'months',
                'divider' => 30 * 24 * 60 * 60,
            ],
            'days' => [
                'singular' => $isSpanish ? 'día' : 'day',
                'plural' => $isSpanish ? 'días' : 'days',
                'divider' => 24 * 60 * 60,
            ],
            'hours' => [
                'singular' => $isSpanish ? 'hora' : 'hour',
                'plural' => $isSpanish ? 'horas' : 'hours',
                'divider' => 60 * 60,
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

        foreach ($units as $key => $data) {
            if ($seconds >= $data['divider']) {
                $value = intval($seconds / $data['divider']);
                return $value === 1 ? "1 " . $data['singular'] : "$value " . $data['plural'];
            }
        }

        return $seconds . ($isSpanish ? ' segundos' : ' seconds');
    }

    private static function formatLargeTime($years, $isSpanish)
    {
        if ($years > 1e9) {
            return $isSpanish ? 'Más de mil millones de años' : 'More than a billion years';
        }

        $units = [
            'millions' => [
                'singular' => $isSpanish ? 'millón' : 'million',
                'plural' => $isSpanish ? 'millones' : 'millions',
                'divider' => 1e6
            ],
            'years' => [
                'singular' => $isSpanish ? 'año' : 'year',
                'plural' => $isSpanish ? 'años' : 'years',
                'divider' => 1
            ],
        ];

        foreach ($units as $key => $data) {
            if ($years >= $data['divider']) {
                $value = intval($years / $data['divider']);
                return $value === 1 ? "1 " . $data['singular'] : "$value " . $data['plural'];
            }
        }

        return $years . ($isSpanish ? ' años' : ' years');
    }

    private static function formatTime($seconds, $isSpanish)
    {
        if ($seconds < 365 * 24 * 60 * 60) {
            return self::formatLittleTime($seconds, $isSpanish);
        }
        $years = $seconds / (365 * 24 * 60 * 60);

        return self::formatLargeTime($years, $isSpanish);
    }

    public static function calculateStrength($password, $isSpanish)
    {
        $zxcvbn = new Zxcvbn();
        $passwordStrength = $zxcvbn->passwordStrength($password);

        $timeToCrackSec = $passwordStrength['crack_times_seconds']['offline_fast_hashing_1e10_per_second'];
        $timeToCrack = self::formatTime($timeToCrackSec, $isSpanish);

        return $timeToCrack;
    }
}
