<?php
namespace App\Helpers;


use App\Enums\TypePassword;

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
}
