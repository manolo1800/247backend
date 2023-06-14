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
        Schema::create('articulos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_categoria');
            $table->string('nombre_articulo');
            $table->text('descripcion');
            $table->boolean('contable');
            $table->boolean('online');
            $table->integer('stock');
            $table->string('codigo_barra');
            $table->string('codigo_cabys');
            $table->string('image_path');
            $table->timestamps();

            $table->foreign('id_categoria')->references('id')->on('categorias');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articulos');
    }
};
