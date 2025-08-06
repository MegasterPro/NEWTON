<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\RateLimiter;

class AuthController extends Controller
{
    /**
     * Enregistrement d'un nouvel utilisateur
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                'min:8',
                'regex:/[a-z]/',      // une minuscule
                'regex:/[A-Z]/',      // une majuscule
                'regex:/[0-9]/',      // un chiffre
                'regex:/[@$!%*#?&]/'  // un caractère spécial
            ],
        ], [
            'password.regex' => 'Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial.'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name'              => $request->name,
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'email_verified_at' => now(), // À remplacer par l'envoi réel d'un email de vérification
        ]);

        // event(new Registered($user)); // Pour activer l'email de vérification

        return response()->json([
            'message' => 'Inscription réussie.'
        ], 201);
    }

    /**
     * Connexion sécurisée avec protection brute-force
     */
    public function login(Request $request)
    {
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        $ip = $request->ip();
        $key = 'login:' . $ip;

        // 🔐 Protection brute-force (5 essais par 1 min)
        if (RateLimiter::tooManyAttempts($key, 5)) {
            $seconds = RateLimiter::availableIn($key);
            return response()->json([
                'message' => "Trop de tentatives. Réessayez dans $seconds secondes."
            ], 429);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            RateLimiter::hit($key);
            return response()->json(['message' => 'Identifiants invalides.'], 401);
        }

        RateLimiter::clear($key);

        $user = Auth::user();

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'message' => 'Connexion réussie.',
            'token'   => $token,
            'user'    => [
                'id'    => $user->id,
                'email' => $user->email,
                'name'  => $user->name,
                'role'  => $user->role ?? 'parent',
            ]
        ]);
    }
}
