<?php

declare(strict_types = 1);

namespace App\Http\Resources\Artist;

use App\Models\Track;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class ArtistResource extends JsonResource
{
    /**
     * @mixin Track
     */
    #[Override]
    public function toArray($request)
    {
        return [
            'id'         => (int) $this->id,
            'name'       => (string) $this->name,
            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }
}
