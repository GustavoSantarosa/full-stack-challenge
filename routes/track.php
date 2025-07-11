<?php

declare(strict_types = 1);

use Illuminate\Support\Facades\Route;

Route::prefix('v1')
    ->namespace('V1')
    ->controller('TrackController')
    ->group(function () {
        Route::post('search/{isrc}', 'search')->name('tracks.search');
        Route::apiResource('', 'TrackController')
            ->only(['index', 'show'])
            ->parameters([
                '' => 'id',
            ]);
    });
