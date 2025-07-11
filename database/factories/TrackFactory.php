<?php

declare(strict_types = 1);

namespace Database\Factories;

use App\Models\Track;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrackFactory extends Factory
{
    protected $model = Track::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'isrc'            => mb_strtoupper(fake()->bothify('??#??########')),
            'title'           => fake()->sentence(3),
            'release_date'    => fake()->date(),
            'duration'        => fake()->randomElement(['02:34', '03:21', '04:05']),
            'preview_url'     => fake()->url,
            'spotify_url'     => fake()->url,
            'available_in_br' => fake()->boolean,
            'album_thumb'     => fake()->imageUrl(300, 300, 'music', true, 'album'),
        ];
    }
}
