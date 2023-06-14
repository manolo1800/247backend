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
        Schema::create('empresa_conf_reserva_asistencias', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_empresa');
            $table->enum('control_asistencia',['Control de asistencia por estado','Control de asistencia por reserva']);
            $table->boolean('certificado_vacunacion');
            $table->enum('aplicacion_areas',['Habilitacion por cliente','Habilitacion por plan']);
            $table->integer('reservas_perdidas');
            $table->boolean('reservas_perdidas_semanales');
            $table->boolean('reservas_perdidas_continuas');
            $table->integer('dias_bloqueo_reserva');
            $table->boolean('lista_espera');
            $table->integer('horas_antes_cancelar');
            $table->integer('cantidad_reservas_dia');
            $table->timestamps();

            $table->foreign('id_empresa')->references('id')->on('empresas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empresa_conf_reserva_asistencias');
    }
};
