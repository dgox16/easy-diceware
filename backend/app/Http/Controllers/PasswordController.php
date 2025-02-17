<?php

namespace App\Http\Controllers;

use App\Helpers\PasswordHelper;
use App\Http\Requests\CheckPasswordRequest;
use App\Http\Requests\GeneratePasswordRequest;
use App\Http\Requests\NewWordsRequest;
use App\Http\Requests\UploadWordsRequest;
use App\Models\EnglishWord;
use App\Models\SpanishWord;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Throwable;

class PasswordController extends Controller
{
    public function newWords(NewWordsRequest $request): JsonResponse
    {
        try {
            $wordsChecked = PasswordHelper::checkWordsToAdd($request->words, $request->isSpanish);
            $response = PasswordHelper::addWords($wordsChecked, $request->isSpanish);

            return response()->json($response);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function uploadWords(UploadWordsRequest $request): JsonResponse
    {
        try {
            $wordsFile = PasswordHelper::readFile($request->isSpanish);
            $wordsChecked = PasswordHelper::checkWordsToAdd($wordsFile, $request->isSpanish);
            $response = PasswordHelper::addWords($wordsChecked, $request->isSpanish);

            return response()->json($response);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function generatePassword(GeneratePasswordRequest $request): JsonResponse
    {
        try {
            $count = $request->count;
            $isSpanish = $request->isSpanish;

            $wordModel = $isSpanish ? new SpanishWord : new EnglishWord;

            $wordList = DB::select("
                SELECT word
                FROM (
                    SELECT word FROM {$wordModel->getTable()} TABLESAMPLE BERNOULLI(1)
                ) AS subquery
                ORDER BY RANDOM()
                LIMIT ?
            ", [$count]);

            $wordList = collect($wordList)->pluck('word')->toArray();

            $password = PasswordHelper::addDelimiters(collect($wordList), $request->type);
            if ($request->withNumbers) {
                $password = PasswordHelper::addNumbers($password, $count);
            }

            $timeToCrack = PasswordHelper::calculateStrength($password, $isSpanish);

            return response()->json([
                'status' => true,
                'password' => $password,
                'timeToCrack' => $timeToCrack,
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Error: '.$th->getMessage(),
            ], 500);
        }
    }

    public function checkPassword(CheckPasswordRequest $request): JsonResponse
    {
        try {
            $timeToCrack = PasswordHelper::calculateStrength($request->password, $request->isSpanish);

            return response()->json([
                'status' => true,
                'timeToCrack' => $timeToCrack,
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Error: '.$th->getMessage(),
            ], 500);
        }
    }
}
