<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed|min:6',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
    ]);

    $user->sendEmailVerificationNotification();

    return response()->json(['message' => 'Inscription réussie. Vérifiez votre email.']);
}

public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Identifiants invalides'], 401);
    }

    $user = Auth::user();

    if (!$user->hasVerifiedEmail()) {
        return response()->json(['message' => 'Email non vérifié'], 403);
    }

    return response()->json(['token' => $user->createToken('parent-token')->plainTextToken]);
}

public function logout(Request $request)
{
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Déconnecté']);
}

public function me(Request $request)
{
    return response()->json($request->user());
}

}
