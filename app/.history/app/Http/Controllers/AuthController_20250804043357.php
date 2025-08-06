<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\M

class AuthController extends Controller
{
    public function store(Request $request): JsonResponse
{
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    event(new Registered($user)); // 🔥 Ceci envoie l’email de vérification

    return response()->json(['message' => 'Utilisateur créé. Vérifiez votre email.']);
}

}
