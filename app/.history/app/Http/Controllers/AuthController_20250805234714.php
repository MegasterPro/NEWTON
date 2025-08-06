<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'email_verified_at' => now(),
        ]);

        // event(new Registered($user)); // Envoie email de vérification

        return response()->json(['message' => 'Inscription réussie. Vérifiez votre email.']);
    }
    public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Identifiants invalides.'], 401);
    }

    $user = Auth::user();

    $token = $user->createToken('authToken')->plainTextToken;

    return response()->json([
        'message' => 'Connexion réussie.',
        'token' => $token,
        'user' => [
            'id' => $user->id,
            'email' => $user->email,
            'name' => $user->name, 
            'role' => $user->role ?? 'parent', 
        ]
    ]);
}

    
}
