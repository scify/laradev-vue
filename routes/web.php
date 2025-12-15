<?php

declare(strict_types=1);

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRestoreController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::middleware(['auth'])->group(function (): void {
    Route::resource('users', UserController::class);

    Route::put('/users/{user}/restore', UserRestoreController::class)->name('users.restore')->withTrashed();
});

// NOSONAR - this comes from Laravel
require __DIR__ . '/settings.php';
// NOSONAR - this comes from Laravel
require __DIR__ . '/auth.php';
