<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\TasksController;
use App\Http\Livewire\Form;
use App\Http\Livewire\Members;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login');
})->name('home-login');


//Route::get('logout', AuthenticationController::class);
Route::resource('registration', AuthenticationController::class);

//Livewire Route
Route::view('users','livewire.home');

Auth::routes(['login' => false]);
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::resource('dashboard', DashboardController::class);
    Route::resource('member', MemberController::class);
    Route::resource('tasks', TasksController::class);
});

