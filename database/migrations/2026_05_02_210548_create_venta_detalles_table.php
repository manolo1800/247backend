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
        Schema::create('venta_detalles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_venta');
            $table->bigInteger('id_articulo');
            $table->bigInteger('id_moneda');
            $table->bigInteger('id_metodoPago');
            $table->string('descripcion_pago');
            $table->timestamps();

            $table->foreign('id_venta')->references('id')->on('ventas');
            $table->foreign('id_articulo')->references('id')->on('articulos');
            $table->foreign('id_moneda')->references('id')->on('monedas');
            $table->foreign('id_metodoPago')->references('id')->on('pago_metodos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('venta_detalles');
    }
};
