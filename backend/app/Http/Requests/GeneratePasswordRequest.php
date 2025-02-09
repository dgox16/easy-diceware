<?php

namespace App\Http\Requests;

use App\Enums\TypePassword;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * @property mixed $count
 * @property mixed $isSpanish
 * @property mixed $type
 * @property mixed $withNumbers
 */
class GeneratePasswordRequest extends FormRequest
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
            'count' => 'required|integer|min:1|max:20',
            'type' => [Rule::enum(TypePassword::class)],
            'isSpanish' => 'required|boolean',
            'withNumbers' => 'required|boolean',
        ];
    }
}
