<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Intervention\Image\ImageManagerStatic as Image;

class BrandController extends Controller
{public function index()
    {
        $brands = Brand::all();

        // Attach the image URLs to each brand
        $brands->each(function ($brand) {
            $brand->image_url = asset('storage/brand_images/' . $brand->image);
        });

        return Inertia::render('Dashboard/BrandsIndex', [
            'brands' => $brands,
        ]);
    }


    public function create()
    {
        return view('brands.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $brand = new Brand([
            'name' => $request->input('name'),
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('brand_images');

            // Use Intervention Image to resize and save the image
            $img = Image::make(storage_path('app/' . $imagePath));
            // Resize the image to 150x150 pixels
            $img->fit(150, 150);

            // Save the resized image to a different path
            $resizedImagePath = str_replace('brand_images', 'brand_images_resized', $imagePath);
            $img->save(storage_path('app/' . $resizedImagePath));

            // Update the brand with the path to the resized image
            $brand->image = $resizedImagePath;
        }

        $brand->save();

        // Return an Inertia response
        return Inertia::render('Dashboard/BrandsIndex', [
            'brands' => Brand::all(), // Adjust this query as needed
        ])->with('success', 'Brand created successfully.');
    }
    public function show($id)
    {
        $brand = Brand::find($id);
        return view('brands.show', compact('brand'));
    }

    public function edit($id)
    {
        $brand = Brand::find($id);
        return view('brands.edit', compact('brand'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $brand = Brand::find($id);
        $brand->name = $request->input('name');

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('brand_images');

            // Use Intervention Image to resize and save the image
            $img = Image::make(storage_path('app/' . $imagePath));

            // Resize the image to 150x150 pixels
            $img->fit(150, 150);

            // Save the resized image
            $img->save(storage_path('app/' . $imagePath));

            $brand->image = $imagePath;
        }

        $brand->save();

        return redirect()->route('brands.index')->with('success', 'Brand updated successfully.');
    }

    public function destroy($id)
    {
        $brand = Brand::find($id);
        $brand->delete();

        return redirect()->route('brands.index')->with('success', 'Brand deleted successfully.');
    }
}
