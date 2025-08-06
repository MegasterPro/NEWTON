<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as Middleware;
use Symfony\Component\HttpFoundation\Request;

class TrustProxies extends Middleware
{
    /**
     * Les proxies qui doivent être approuvés.
     *
     * @var array|string|null
     */
    protected $proxies;

    /**
     * Les en-têtes à utiliser pour détecter les proxies.
     *
     * @var int
     */
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
}

