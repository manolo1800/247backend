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
        Schema::create('planes', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->enum('tipo_plan',['Regular','Temporal','Recurrente','Planilla']);
            $table->enum('contrato_recurrente',['0 meses','3 meses','6 meses','12 meses']);
            $table->boolean('paquete_sesiones');
            $table->boolean('vigencia_plan');
            $table->boolean('edad_socio');
            $table->bigInteger('id_tarifa');
            $table->integer('monto');
            $table->boolean('recargo_morosidad');
            $table->boolean('recargo_ausencia');
            $table->integer('clases_mes');
            $table->integer('dias_gracias');
            $table->timestamps();

            $table->foreign('id_tarifa')->references('id')->on('tarifas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planes');
    }
};
