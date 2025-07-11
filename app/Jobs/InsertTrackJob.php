<?php

declare(strict_types = 1);

namespace App\Jobs;

use App\Models\Artist;
use App\Models\Track;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class InsertTrackJob implements ShouldQueue
{
    use Queueable;

    protected $item;
    protected $isrc;

    public function __construct(array $item, string $isrc)
    {
        $this->item = $item;
        $this->isrc = $isrc;
    }

    public function handle()
    {
        $track = new Track();

        $track->isrc         = $this->item['external_ids']['isrc'] ?? $this->isrc;
        $track->title        = $this->item['name'] ?? 'Unknown Track';
        $track->release_date = $this->item['album']['release_date'] ?? null;
        $track->duration     = isset($this->item['duration_ms'])
            ? gmdate('i:s', (int) ($this->item['duration_ms'] / 1000))
            : '00:00';
        $track->preview_url     = $this->item['preview_url'] ?? null;
        $track->spotify_url     = $this->item['external_urls']['spotify'] ?? '';
        $track->available_in_br = isset($this->item['available_markets'])
            ? in_array('BR', $this->item['available_markets'])
            : false;
        $track->album_thumb = $this->item['album']['images'][0]['url'] ?? '';
        $track->save();

        if (!empty($this->item['artists'])) {
            $artistsIds = [];

            foreach ($this->item['artists'] as $artistData) {
                $artist       = Artist::firstOrCreate(['name' => $artistData['name']]);
                $artistsIds[] = $artist->id;
            }

            $artistIds = collect($artistsIds)->filter()->all();

            if (method_exists($track, 'artists')) {
                $track->artists()->sync($artistIds);
            }
        }
    }
}
