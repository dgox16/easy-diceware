<?php

use App\Http\Controllers\PasswordController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(PasswordController::class)->group(function () {
    Route::post('/password/generate', 'generatePassword');
    Route::post('/password/check', 'checkPassword');
});
