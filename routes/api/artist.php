<?php

declare(strict_types = 1);

use Illuminate\Support\Facades\Route;

Route::prefix('v1')
    ->namespace('V1')
    ->controller('ArtistController')
    ->group(function () {
        Route::apiResource('', 'ArtistController')
            ->only(['index'])
            ->parameters([
                '' => 'id',
            ]);
    });
