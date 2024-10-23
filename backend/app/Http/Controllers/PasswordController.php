<?php

namespace App\Http\Controllers;

use App\Helpers\PasswordHelper;
use App\Http\Requests\CheckPasswordRequest;
use App\Http\Requests\GeneratePasswordRequest;
use App\Http\Requests\UploadWordsRequest;
use App\Models\EnglishWord;
use App\Models\SpanishWord;
use Illuminate\Http\Request;
use Throwable;
use Illuminate\Http\JsonResponse;

class PasswordController extends Controller
{
    public function uploadWords(UploadWordsRequest $request): JsonResponse
    {
        try {
            $file = $request->isSpanish ? 'words_spanish.txt' : 'words_english.txt';
            $filePath = base_path($file);

            if (!file_exists($filePath)) {
                return response()->json(['status' => false, 'message' => 'File not found'], 404);
            }

            $data = PasswordHelper::readFile($filePath, $request->isSpanish);
            $totalAdded = count($data);

            if ($totalAdded == 0) {
                return response()->json([
                    'status' => true,
                    'message' => 'All the words are already in our database',
                ]);
            }

            if ($request->isSpanish) {
                SpanishWord::insert($data);
            } else {
                EnglishWord::insert($data);
            }
            return response()->json([
                'status' => true,
                'message' => 'Words uploaded successfully',
                'totalAdded' => $totalAdded
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function generatePassword(GeneratePasswordRequest $request): JsonResponse
    {
        try {
            if ($request->isSpanish) {
                $words = SpanishWord::inRandomOrder()->take($request->count)->pluck('word');
            } else {
                $words = EnglishWord::inRandomOrder()->take($request->count)->pluck('word');
            }
            $password = PasswordHelper::addDelimiters($words, $request->type);
            $timeToCrack = PasswordHelper::calculateStrength($password, $request->isSpanish);

            return response()->json([
                'status' => true,
                'password' => $password,
                'timeToCrack' => $timeToCrack
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th
            ], 500);
        }
    }

    public function checkPassword(CheckPasswordRequest $request): JsonResponse
    {
        try {
            $timeToCrack = PasswordHelper::calculateStrength($request->password, $request->isSpanish);

            return response()->json([
                'status' => true,
                'timeToCrack' => $timeToCrack
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}