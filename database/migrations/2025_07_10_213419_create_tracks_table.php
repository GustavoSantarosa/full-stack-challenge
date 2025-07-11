<?php

declare(strict_types = 1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->string('isrc')->unique();
            $table->string('title');
            $table->date('release_date');
            $table->string('duration'); // formato mm:ss
            $table->string('preview_url')->nullable();
            $table->string('spotify_url');
            $table->boolean('available_in_br');
            $table->string('album_thumb');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracks');
    }
};
