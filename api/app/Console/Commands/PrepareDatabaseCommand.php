<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PrepareDatabaseCommand extends Command
{
    protected $signature = 'db:prepare {--force : Forzar la ejecución en producción}';

    protected $description = 'Ejecuta las migraciones y los seeders iniciales de la aplicación.';

    public function handle()
    {
        $this->info('Iniciando preparación de la base de datos...');

        $this->call('migrate', [
            '--force' => $this->option('force'),
        ]);
        $this->info('Migraciones completadas.');

        $this->info('Ejecutando seeder de palabras...');
        $this->call('db:seed', [
            '--class' => 'WordsSeeder',
            '--force' => $this->option('force'),
        ]);

        $this->info('¡Base de datos preparada con éxito!');
    }
}
