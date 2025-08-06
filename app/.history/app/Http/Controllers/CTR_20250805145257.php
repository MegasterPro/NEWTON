<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CTR extends Controller
{
    public function accueil()
    {
        return Inertia::render('Home');
    }

    public function connexion()
    {
        return Inertia::render('connexion');
    }

    public function regist()
    {
        return Inertia::render('Regist');
    }

    public function parent()
    {
        return Inertia::render('parent');
    }

    public function voir() {
        $post = User::findOrFail($id);
        return view('voir', compact('user'));
    }
}
