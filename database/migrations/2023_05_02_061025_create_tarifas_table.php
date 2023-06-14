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
        Schema::create('tarifas', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');            
            $table->boolean('vigencia');
            $table->enum('modalidad_pago',['Diario','Semanal','Mensual','Matricula','Paquete','Adicional']);
            $table->integer('duracion');
            $table->integer('sesion_paquete');
            $table->integer('regalia');
            $table->bigInteger('codigo_cabys');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarifas');
    }
};
