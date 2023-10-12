<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = ['name', 'image_path'];

    protected $appends = ['image_url'];

   // Brand.php// Brand.php

    // Define an accessor to get the full image URL
    public function getImageUrlAttribute()
    {
        return asset('storage/' . $this->image);
    }
}