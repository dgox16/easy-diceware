<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

enum TypePassword: string
{
    case Space = 'space';
    case Comma = 'comma';
    case Dash = 'dash';
    case Underscore = 'underscore';
    case Period = 'period';
    case Slash = 'slash';
    case Pipe = 'pipe';
    case PascalCase = 'PascalCase';
    case CamelCase = 'camelCase';
}
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
        ];
    }
}
