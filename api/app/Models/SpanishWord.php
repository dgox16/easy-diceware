<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static whereIn(string $string, $wordsToAdd)
 * @method static insert($words)
 * @method static inRandomOrder()
 */
class SpanishWord extends Model
{
    protected $fillable = [
        'word',
    ];

    public $timestamps = false;
}
