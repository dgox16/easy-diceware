<?php

namespace App\Enums;

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
