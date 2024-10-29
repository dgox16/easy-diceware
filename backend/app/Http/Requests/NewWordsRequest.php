<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property mixed $words
 * @property mixed $isSpanish
 */
class NewWordsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'isSpanish' => 'required|boolean',
            'words' => 'required|array|min:1',
            'words.*' => 'required|string|min:1',
        ];
    }
}
