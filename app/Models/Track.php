<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    public function artists() {
        return $this->belongsToMany(Artist::class);
    }
}
