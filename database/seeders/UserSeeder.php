<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'Admin',
            'email' => 'soporte@latinsoftcr.net',
            'user' => 'Admin',
            'id_user_type' => 1,
            'password' => bcrypt('latinsoft123'),
        ]);
    }
}
