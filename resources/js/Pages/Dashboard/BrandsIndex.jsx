import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';

export default function BrandsIndex({ auth, brands}) {
    const [showModal, setShowModal] = useState(false);
    const [newBrandName, setNewBrandName] = useState('');
    const [newBrandImage, setNewBrandImage] = useState(null);

    const addBrand = async () => {
        // Create a FormData object to send the form data
        const formData = new FormData();
        formData.append('name', newBrandName);
        formData.append('image', newBrandImage);

        try {
            // Make a POST request to the server to add a new brand
            const response = await axios.post('/brands', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
                },
            });

            // Handle the response here (e.g., show a success message)
            console.log('Brand added successfully:', response.data);

            // Close the modal and reset input fields
            setShowModal(false);
            setNewBrandName('');
            setNewBrandImage(null);

            // You can also update the brands list by fetching the latest data
            // Replace this with the actual API endpoint to fetch brands
            const updatedBrands = await axios.get('/brands');
            brands.value = updatedBrands.data;
        } catch (error) {
            // Handle any errors here (e.g., show an error message)
            console.error('Error adding brand:', error);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="fw-bold fs-4 text-dark">Brands</h2>   }>
            <Head title="Brands" />
            <div>
                <button onClick={() => setShowModal(true)}>Add Brand</button>

                <div className="brands">
                {brands.map((brand, index) => (
    <div key={index} className="brand">
        <img src={`storage/${brand.image}`} alt="Brand Image" />
        <p>{brand.name}</p>
    </div>
))}

                </div>
            </div>

            {/* Modal for adding a new brand */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <h2>Add a New Brand</h2>
                <input
                    type="text"
                    placeholder="Brand Name"
                    value={newBrandName}
                    onChange={(e) => setNewBrandName(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewBrandImage(e.target.files[0])}
                />
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button onClick={addBrand}>Add</button>
            </Modal>
        </AuthenticatedLayout>
    );
}
