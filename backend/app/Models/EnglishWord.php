<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnglishWord extends Model
{
    protected $fillable = [
        'word',
    ];

    public $timestamps = false;
}
