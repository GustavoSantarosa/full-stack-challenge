<?php

declare(strict_types = 1);

namespace App\Services\V1;

use Aerni\Spotify\Facades\Spotify;
use App\Jobs\InsertTrackJob;
use App\Models\Track;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use QuantumTecnology\ServiceBasicsExtension\BaseService;
use QuantumTecnology\ValidateTrait\Data;

class TrackService extends BaseService
{
    protected $model = Track::class;

    protected array $searchableColumns = [
        'isrc',
        'title',
        'release_date',
        'duration',
    ];

    public function search(string $isrc): Data
    {
        abort_if(
            $this->getModel()->where('isrc', $isrc)->first(),
            Response::HTTP_BAD_REQUEST,
            __('Track already exists in the list')
        );

        $offset = 0;
        $limit  = 20;

        $this->searchTrack(
            isrc: $isrc,
            limit: $limit,
            offset: $offset
        )->each(function ($track) use ($isrc, &$offset, &$limit) {
            $total = $track['total'] ?? 0;

            while ($offset < $total) {
                foreach ($track['items'] as $item) {
                    InsertTrackJob::dispatch($item, $isrc);
                }

                $offset += $limit;

                if (!isset($track['next']) || !$track['next']) {
                    break;
                }
            }

            return $isrc;
        });

        return new Data([
            'status'  => Response::HTTP_CREATED,
            'message' => __('Track not found in the list, but was found and will be added'),
            'data'    => [
                'isrc' => $isrc,
            ],
        ]);
    }

    private function searchTrack(string $isrc, int $limit = 20, int $offset = 0): Collection
    {
        $result = collect(Spotify::searchItems(sprintf('isrc:%s', $isrc), 'track')->limit($limit)->offset($offset)->get());

        abort_if($result->isEmpty(), Response::HTTP_BAD_REQUEST, 'Track not found');

        return $result;
    }
}
