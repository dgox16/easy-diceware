<?php

use App\Http\Controllers\PasswordController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::controller(PasswordController::class)->group(function () {
    Route::post('/words/upload', 'uploadWords')->middleware('admin');
    Route::post('/words/new', 'newWords')->middleware('admin');
    Route::post('/password/generate', 'generatePassword');
    Route::post('/password/check', 'checkPassword');
});
