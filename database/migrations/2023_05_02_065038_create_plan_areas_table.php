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
        Schema::create('plan_areas', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_plan');
            $table->bigInteger('id_area');
            $table->timestamps();

            $table->foreign('id_plan')->references('id')->on('planes');
            $table->foreign('id_area')->references('id')->on('areas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_areas');
    }
};
