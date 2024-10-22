<?php

use App\Http\Controllers\PasswordController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::controller(UserController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::controller(PasswordController::class)->group(function () {
    Route::post('/words/upload', 'uploadWords');
    Route::post('/password/generate', 'generatePassword');
    Route::post('/password/check', 'checkPassword');
});
