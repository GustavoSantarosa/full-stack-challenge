<?php

declare(strict_types = 1);

namespace App\Http\Controllers\V1;

use App\Http\Resources\Track\TrackResource;
use App\Services\V1\TrackService;
use Illuminate\Http\JsonResponse;
use QuantumTecnology\ControllerBasicsExtension\Controllers\BaseController;

/**
 * @method TrackService getService()
 */
class TrackController extends BaseController
{
    protected string $service  = TrackService::class;
    protected string $resource = TrackResource::class;

    protected array $allowedIncludes = [];

    protected array $allowedFilters = [];

    public function search(string $isrc): JsonResponse
    {
        $result = $this->getService()->search($isrc);

        return $this->customResponse(
            data: $result->data,
            message: $result->message,
            status: $result->status,
        );
    }
}
