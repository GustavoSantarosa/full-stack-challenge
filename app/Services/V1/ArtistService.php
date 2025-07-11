<?php

declare(strict_types = 1);

namespace App\Services\V1;

use App\Models\Artist;
use QuantumTecnology\ServiceBasicsExtension\BaseService;

class ArtistService extends BaseService
{
    protected $model = Artist::class;
}
