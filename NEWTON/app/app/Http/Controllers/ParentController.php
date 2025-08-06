<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ParentController extends Controller
{

public function sendBulletin(Request $request)
{
    $user = $request->user();

    $message = "Bulletin de {$user->name} n° {$user->id}";
    $emailEtablissement = "etablissement@example.com";

    Mail::raw($message, function ($mail) use ($emailEtablissement) {
        $mail->to($emailEtablissement)
             ->subject('Demande de bulletin');
    });

    return response()->json(['message' => 'Bulletin envoyé']);
}

}
