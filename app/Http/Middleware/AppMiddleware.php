<?php

declare(strict_types = 1);

namespace App\Http\Middleware;

use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Routing\Middleware\SubstituteBindings;
use QuantumTecnology\ControllerBasicsExtension\Middleware\CheckRouteLevelMiddleware;
use QuantumTecnology\ControllerBasicsExtension\Middleware\CryptographyMiddleware;

class AppMiddleware
{
    public function __invoke(Middleware $middleware): void
    {
        $middleware
            ->priority([
                CryptographyMiddleware::class,
                ServiceMiddleware::class,
                SubstituteBindings::class,
            ])
            ->use([])
            ->alias([
                'encrypt'      => CryptographyMiddleware::class,
                'service'      => ServiceMiddleware::class,
            ])->prepend([
                //
            ])->append([
                //
            ])->api([]);
    }
}
