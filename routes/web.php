<?php

use App\Http\Controllers\Backend\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Livewire Route
Route::view('users','livewire.home');
//Route::view('users',\App\Http\Livewire\Users::class);


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


/*Route::middleware('auth')->namespace('Backend')->prefix('backend')->group(function () {
    Route::resource('dashboard', DashboardController::class);
});*/

Route::resource('dashboard', DashboardController::class);
