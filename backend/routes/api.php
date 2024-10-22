<?php

use App\Http\Controllers\EnglishWordController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpanishWordController;

Route::controller(UserController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::controller(SpanishWordController::class)->group(function () {
    Route::get('/es/words/upload', 'uploadWords');
    Route::post('/es/password/generate', 'generatePassword');
    Route::post('/es/password/check', 'checkPassword');
});

Route::controller(EnglishWordController::class)->group(function () {
    Route::get('/en/words/upload', 'uploadWords');
    Route::post('/en/password/generate', 'generatePassword');
});
