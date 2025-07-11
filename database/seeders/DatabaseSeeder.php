<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Track;
use App\Models\Artist;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Artist::factory()
            ->count(5)
            ->create()
            ->each(function ($artist) {
                $tracks = Track::factory()->count(2)->create();
                $artist->tracks()->attach($tracks->pluck('id')->toArray());
            });

    }
}
