<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserType;

class UserTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        UserType::create([
            'user_type' => 'Administrador'
        ]);

        UserType::create([
            'user_type' => 'Mercadeo'
        ]);

        UserType::create([
            'user_type' => 'Recepcion'
        ]);

        UserType::create([
            'user_type' => 'Contabilidad'
        ]);

        UserType::create([
            'user_type' => 'Instructor'
        ]);

        UserType::create([
            'user_type' => 'Cliente'
        ]);

        UserType::create([
            'user_type' => 'Convenio'
        ]);

        UserType::create([
            'user_type' => 'Gerente Sucursal'
        ]);
    }
}
