<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        WordsSeeder::readFileAndSeed(true); // español
        WordsSeeder::readFileAndSeed(false); // inglés
    }
}
