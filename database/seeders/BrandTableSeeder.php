<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

use Intervention\Image\Facades\Image;
class BrandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            [
                'name' => 'Brand 1',
                'image_path' => 'brand-1.jpg',
            ],
            [
                'name' => 'Brand 2',
                'image_path' => 'brand-2.jpg',
            ],
            [
                'name' => 'Brand 3',
                'image_path' => 'brand-3.png',
            ],
            [
                'name' => 'Brand 4',
                'image_path' => 'brand-4.jpg',
            ],
        ];

        foreach ($brands as $brand) {
            $newBrand = \App\Models\Brand::create($brand);
            
            $sourcePath = public_path('images/' . $brand['image_path']);
            $destinationPath = storage_path('app/public/brand_images/' . $brand['image_path']);
            
            File::makeDirectory(dirname($destinationPath), 0755, true, true);
            
            // Resize the image without cutting
            $resizedImage = Image::make($sourcePath)->resize(150, 150, function ($constraint) {
                $constraint->aspectRatio(); // Maintain aspect ratio
                $constraint->upsize(); // Prevent image from being smaller than 150x150
            });

            $resizedImage->save($destinationPath);
            
            $newBrand->update(['image_path' => 'brand_images/' . $brand['image_path']
            ]
            );
        }
    }
}