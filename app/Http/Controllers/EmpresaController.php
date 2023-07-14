<?php

namespace App\Http\Controllers;

use App\Models\empresas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $empresas = empresas::all();
        //return "hola";
        return Inertia::render('ConfiguracionInicial/Empresa/Index',['empresas'=>$empresas]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(empresas $empresas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, empresas $empresas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(empresas $empresas)
    {
        //
    }
}
