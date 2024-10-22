<?php

namespace App\Http\Requests;

use App\Enums\TypePassword;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GeneratePasswordRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'count' => 'required|integer|min:1|max:20',
            'type' => [Rule::enum(TypePassword::class)],
            'isSpanish' => 'required|boolean'
        ];
    }
}
