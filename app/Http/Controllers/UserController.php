<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use App\Models\UserType;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $auth = Auth::user()->name;
        $users = User::all();
        $user_types = UserType::all();


        return Inertia::render('User/Index',['users'=>$users,'auth'=>$auth,'user_types'=>$user_types]);
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
                $path = 'imgs/usuarios/' . $filename;
                Image::make($image)->save(public_path($path));

                $user->profile_photo_path = $path;

            }else{

                $user->profile_photo_path = NULL;

            }

            $user->password = Hash::make($request->password);
            $user->save();

            return redirect('user');

        }catch(\Throwable $th){
            return $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        //

        $user->name = $request->name;
        $user->email = $request->email;
        $user->id_user_type = $request->id_user_type;

        if($request->hasFile('profile_photo_path')){

            $image = $request->file('profile_photo_path');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $path = 'imgs/usuarios/' . $filename;
            Image::make($image)->save(public_path($path));

            $user->profile_photo_path = $path;

        }

        $user->save();
        return redirect('user');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        $user->delete();
        return redirect('user');
    }
}
