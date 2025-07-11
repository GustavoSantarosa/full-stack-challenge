<?php

declare(strict_types = 1);

namespace App\Http\Controllers\V1;

use App\Http\Resources\Artist\ArtistResource;
use App\Services\V1\ArtistService;
use App\Services\V1\TrackService;
use QuantumTecnology\ControllerBasicsExtension\Controllers\BaseController;

/**
 * @method TrackService getService()
 */
class ArtistController extends BaseController
{
    protected string $service  = ArtistService::class;
    protected string $resource = ArtistResource::class;
}
