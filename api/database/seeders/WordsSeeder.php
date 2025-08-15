<?php

namespace Database\Seeders;

use App\Models\EnglishWord;
use App\Models\SpanishWord;
use Illuminate\Database\Seeder;

class WordsSeeder extends Seeder
{
    public function run(): void
    {
        if (SpanishWord::count() > 0 || EnglishWord::count() > 0) {
            $this->command->info('Las tablas de palabras ya contienen datos. Seeder omitido.');

            return;
        }

        $this->command->info('Sembrando palabras en español...');
        $this->readFileAndSeed(true);

        $this->command->info('Sembrando palabras en inglés...');
        $this->readFileAndSeed(false);
    }

    private function readFileAndSeed(bool $isSpanish): void
    {
        $file = $isSpanish ? 'words_spanish.txt' : 'words_english.txt';
        $filePath = base_path($file);

        if (! file_exists($filePath)) {
            $this->command->error("Archivo no encontrado: {$filePath}");

            return;
        }

        $modelClass = $isSpanish ? SpanishWord::class : EnglishWord::class;
        $handle = fopen($filePath, 'r');
        $batch = [];
        $batchSize = 500;

        while (($line = fgets($handle)) !== false) {
            $word = trim($line);
            if ($word !== '') {
                $batch[] = ['word' => $word];
                if (count($batch) >= $batchSize) {
                    $modelClass::insertOrIgnore($batch);
                    $batch = [];
                }
            }
        }

        if (! empty($batch)) {
            $modelClass::insertOrIgnore($batch);
        }

        fclose($handle);
    }
}
