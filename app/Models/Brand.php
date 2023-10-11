<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = ['name', 'image'];

    protected $appends = ['image_url'];

   // Brand.php// Brand.php

public function getImageUrlAttribute()
{
   return asset('storage/' . $this->image);
}
}
