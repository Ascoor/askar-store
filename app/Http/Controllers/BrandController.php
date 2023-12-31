<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::all();

        return Inertia::render('Dashboard/BrandsIndex', [
            'brands' => $brands,
        ]);
    }
public function data()
{
    $brands = Brand::all();
    return response()->json([
        'brands' => $brands,
    ]);
}
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);
    
        $imagePath = $request->file('image')->store('brand_images', 'public');
    
        // Resize the image to 150x150
        $resizedImage = Image::make(public_path('storage/' . $imagePath))
            ->fit(150, 150)
            ->save(null, 100); // Specify format and quality here (null for original format)
    
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->image_path = $imagePath;
        $brand->save();
    
        return response()->json([
            'message' => 'Brand add successfully.',
        ]);
    }
    


    public function destroy($id)
    {
        // Find the Brand by ID
        $brand = Brand::find($id);
    
        if ($brand) {
            // Get the image path
            $imagePath = $brand->image_path;
    
            // Delete the image from storage
            if ($imagePath) {
                Storage::delete('public/' . $imagePath);
            }
    
            // Delete the Brand
            $brand->delete();
    
            return response()->json([
                'message' => 'Brand deleted successfully.',
            ]);
        }
    
        // Handle if the Brand with the given ID doesn't exist
        if (! $brand) {
            return response()->json([
                'message' => 'Brand not found.',
            ], 404);
        }
    }
}