<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function redirectTo($request)
{
    if (! $request->expectsJson()) {
        // Option 1 : renvoie rien, donc erreur 401 directe
        // abort(401, 'Non authentifié.');
        
        // OU Option 2 : redirige vers une page externe (si tu veux)
        // return 'http://localhost:3000/login';
    }
}
}
