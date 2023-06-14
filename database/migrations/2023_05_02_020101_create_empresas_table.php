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
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_empresa');
            $table->string('color_dashboard')->nullable();
            $table->string('color_letra_title')->nullable();
            $table->string('color_letra_dashboard')->nullable();
            $table->string('color_letra_body')->nullable();
            $table->string('color_boton_crear')->nullable();
            $table->string('logo_file_path',2048)->nullable();
            $table->string('loginPlaceToPay')->nullable();
            $table->string('secretkeyPlaceToPay')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresas');
    }
};
