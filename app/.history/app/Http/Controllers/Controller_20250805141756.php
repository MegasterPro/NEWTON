<?php

namespace App\Http\Controllers;
namespace App\Models;

abstract class Controller
{
    public function voir() {
        return view(voir);
    }
}
