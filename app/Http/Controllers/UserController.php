<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\UserType;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        //$users = User::all();        
        $users = User::Select('id','profile_photo_path','user','name','email','id_user_type')->get();
        $user_types = UserType::all();


        $return = ['users'=>$users,'user_types'=>$user_types];
        return response()->json($return, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        try{
            
            
            //guardar registro
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->id_user_type = $request->id_user_type;

            //validar si existe una imagen en el $request si es asi la guarda en el path
            if($request->hasFile('profile_photo_path')){

                $image = $request->file('profile_photo_path');
                $filename = time() . '.' . $image->getClientOriginalExtension();                
                $path = 'http://127.0.0.1:8000/api/download/usuarios/image_' . $filename;
                $fileName = $image->storeAs('usuarios/', 'image_' . $filename);
                //$responseImage = Image::make($image)->save(public_path($path));                
                $user->profile_photo_path = $path;                

            }else{

                $user->profile_photo_path = NULL;

            }

            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json("success", 200);

        }catch(\Throwable $th){            
            return response()->json("error", 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
        
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
        return $request;
        die();
        try{
            $user->name = $request->name;
            $user->email = $request->email;
            $user->id_user_type = $request->id_user_type;
            
            /*if($request->hasFile('profile_photo_path')){
            
                $image = $request->file('profile_photo_path');
                $filename = time() . '.' . $image->getClientOriginalExtension();                
                $path = 'http://127.0.0.1:8000/api/download/usuarios/image_' . $filename;
                $fileName = $image->storeAs('usuarios/', 'image_' . $filename);
                $user->profile_photo_path = $path;
            
            }*/
        
            $user->update();    

            return response()->json("success", 200);

        }catch(\Throwable $th){  
            return $th;          
            //return response()->json("error", 400);
        }
        
        

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        try{
            $user->delete();
            return response()->json("success", 200);
        }catch(\Throwable $th){
            return response()->json("error", 400);
        }
        
        
    }
}
