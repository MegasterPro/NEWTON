<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CTR;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\Auth\VerifyEmailController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


Route::get('/accueil', [CTR::class, 'accueil'])->name('accueil');
Route::get('/login', [CTR::class, 'connexion'])->name('connexion');
Route::get('/register', [CTR::class, 'regist'])->name('register');
Route::get('/parent', [CTR::class, 'parent'])->name('parent');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/send-bulletin', [ParentController::class, 'sendBulletin'])->middleware('auth:sanctum');


Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });















    Route::get('voir' , []);
    