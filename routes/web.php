<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Livewire\Members;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login');
})->name('home-login');

//Route::get('logout', AuthenticationController::class);
Route::resource('registration', AuthenticationController::class);

//Livewire Route
Route::view('users','livewire.home');
//Route::get('/members', Members::class);

//Route::view('users',\App\Http\Livewire\Users::class);

Auth::routes(['login' => false]);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::resource('dashboard', DashboardController::class);
});

Route::group([ 'middleware' => 'auth' ], function() {
    Route::get('member', [Members::class, 'member'])->name('admin.member');
}) ;





//Route::resource('dashboard', DashboardController::class);
