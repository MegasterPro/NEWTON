<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class CTR extends Controller
{
    public function accueil()
    {
        return Inertia::render('app');
    }

    public function connexion()
    {
        return Inertia::render('connexion');
    }

    public function regist()
    {
        return Inertia::render('register');
    }

    public function parent()
    {
        return Inertia::render('parent');
    }
}
