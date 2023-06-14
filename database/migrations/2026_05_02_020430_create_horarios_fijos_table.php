<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('horarios_fijos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_area');
            $table->bigInteger('id_clase');
            $table->bigInteger('id_user');
            $table->integer('dia');
            $table->time('hora_ini');
            $table->time('hora_fin');
            $table->integer('cupo_max');
            $table->integer('inscritos');
            $table->integer('congelados');
            $table->boolean('reposiciones');
            $table->integer('max_reposiciones');
            $table->integer('reposiciones_semanal');
            $table->string('color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('horarios_fijos');
    }
};
