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
        Schema::create('empresa_facturacion_detalles', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_cambio');
            $table->bigInteger('id_empresa');
            $table->bigInteger('id_moneda');
            $table->boolean('pregunta_imprimir');
            $table->boolean('edicion_cliente');
            $table->enum('fecha_pago_socio',['Fecha Variable','Fecha Fija']);
            $table->boolean('cobrar_cuotas_retrasadas');
            $table->boolean('eliminar_casilleros');
            $table->boolean('punto_venta');
            $table->integer('notificacion_cobro');
            $table->timestamps();

            $table->foreign('id_moneda')->references('id')->on('monedas');
            $table->foreign('id_empresa')->references('id')->on('empresas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresa_facturacion_detalles');
    }
};
