<?php

declare(strict_types = 1);

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use QuantumTecnology\ModelBasicsExtension\Traits\Filter;

class Track extends Model
{
    use Filter;

    protected $fillable = [
        'isrc',
        'title',
        'release_date',
        'duration',
        'preview_url',
        'spotify_url',
        'available_in_br',
        'album_thumb',
    ];

    public function artists()
    {
        return $this->belongsToMany(Artist::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Scopes
    |--------------------------------------------------------------------------
    |
    | Here you may specify the scopes that the model should have with
    |
    */
    public function scopeByArtistIds(Builder $query, string | array $params = []): Builder
    {
        return $query
            ->when($this->filtered($params, 'artist_ids'), function ($query, $params) {
                $query->whereHas('artists', function ($query) use ($params) {
                    $query->whereIn('artists.id', $params);
                });
            });
    }
}
