<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ArchivosController extends Controller
{
    /**
    * servicio para guardar imagenes
    * @param profile_photo_path viene dentro del $request 
    */
    public function upload(Request $request, string $folder){
        
        $imagen = $request->file('profile_photo_path');
        
        $result = $request->file('file')->storeAs(
            $folder,$imagen->getClientOriginalName()
        );

        
    }

    /**
    * servicio para enviar imagenes
    * @param folder nombre de la carpeta donde esta el archivo 
    * @param file nombre del archivo que se requiere
    * @return path retorna el archivo que se solicita
    */
    public function download(Request $request,string $folder,string $file){
        
        //return response()->json("hola $folder $file", 200);

        $path = storage_path("app/$folder/$file");
        
        return response()->file($path);
    }
}
