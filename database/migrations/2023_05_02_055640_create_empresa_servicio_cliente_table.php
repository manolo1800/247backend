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
        Schema::create('empresa_servicio_cliente', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_empresa');
            $table->string('correo_oficial');
            $table->string('consulta_frecuentes');
            $table->timestamps();

            $table->foreign('id_empresa')->references('id')->on('empresas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresa_servicio_cliente');
    }
};
