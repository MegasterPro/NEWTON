<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class CTR extends Controller
{
    public function accueil()
    {
        return Inertia::render('Home');
    }
}
