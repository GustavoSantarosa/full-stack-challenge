<?php

declare(strict_types = 1);

namespace App\Services\V1;

use Aerni\Spotify\Facades\Spotify;
use App\Jobs\InsertTrackJob;
use App\Models\Artist;
use App\Models\Track;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use QuantumTecnology\ServiceBasicsExtension\BaseService;
use QuantumTecnology\ValidateTrait\Data;

class ArtistService extends BaseService
{
    protected $model = Artist::class;
}
