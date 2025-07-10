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
        //
    });
