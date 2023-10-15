<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    public function generateUniqueSlug($name, $imageName, $modelClass, $suffix = '')
    {
        $baseSlug = Str::slug($name . '-' . pathinfo($imageName, PATHINFO_FILENAME), '-');
        $slug = $baseSlug;

        $count = 1;
        $model = new $modelClass;

        while ($model->where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $count . $suffix;
            $count++;
        }

        return $slug;
    }
    public function index()
    {
        $categories = Category::all();

        return Inertia::render('Category/index', [
            'categories' => $categories,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $category = new Category();
        $category->name = $request->input('name');
        $category->slug = $this->generateUniqueSlug($category->name, $request->file('image')->getClientOriginalName(), Category::class);

        $imagePath = $request->file('image')->store('category_images', 'public');

        $resizedImage = Image::make(public_path('storage/' . $imagePath))
            ->fit(150, 150)
            ->save('storage/' . $imagePath);

        $category->image_path = $imagePath; // Ensure you set the correct attribute name for the image path
        $category->save();

        return response()->json([
            'message' => 'Category created successfully',

        ], 201);
    }
    public function destroy($id)
    {
        // Find the Brand by ID
        $category = Category::find($id);

        if ($category) {
            // Get the image path
            $imagePath = $category->image_path;

            // Delete the image from storage
            if ($imagePath) {
                Storage::delete('public/' . $imagePath);
            }

            // Delete the Brand
            $category->delete();

            return response()->json([
                'message' => 'Category deleted successfully.',
            ]);
        }

        // Handle if the Brand with the given ID doesn't exist
        if (! $category) {
            return response()->json([
                'message' => 'Brand not found.',
            ], 404);
        }
    }
}
