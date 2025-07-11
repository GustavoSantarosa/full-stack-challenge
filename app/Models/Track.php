<?php

declare(strict_types = 1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
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
}
