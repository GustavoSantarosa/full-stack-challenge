<?php

declare(strict_types = 1);

use Illuminate\Support\Facades\Route;

return fn () => Route::namespace('App\\Http\\Controllers')
    ->middleware([
        'api',
        'encrypt',
        'service',
    ])
    ->group(function () {
        /*
        |--------------------------------------------------------------------------
        | Routes Default
        |--------------------------------------------------------------------------
        */
        Route::prefix('tracks')
            ->name('tracks.')
            ->group(base_path('routes/api/track.php'));
        Route::prefix('artists')
            ->name('artists.')
            ->group(base_path('routes/api/artist.php'));
    });
