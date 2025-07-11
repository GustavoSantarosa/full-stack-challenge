<?php

declare(strict_types = 1);

namespace App\Http\Resources\Track;

use App\Models\Track;
use Illuminate\Http\Resources\Json\JsonResource;
use Override;

class TrackResource extends JsonResource
{
    /**
     * @mixin Track
     */
    #[Override]
    public function toArray($request)
    {
        return [
            'id'              => (int) $this->id,
            'isrc'            => $this->isrc,
            'title'           => $this->title,
            'release_date'    => $this->release_date,
            'duration'        => $this->duration,
            'preview_url'     => $this->preview_url,
            'spotify_url'     => $this->spotify_url,
            'available_in_br' => (bool) $this->available_in_br,
            'album_thumb'     => $this->album_thumb,
            'artists'         => $this->whenLoaded('artists', function () {
                return $this->artists->map(function ($artist) {
                    return [
                        'id'   => (int) $artist->id,
                        'name' => $artist->name,
                    ];
                });
            }),
            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }
}
