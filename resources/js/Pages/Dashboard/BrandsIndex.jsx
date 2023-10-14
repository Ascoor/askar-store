import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';

export default function BrandsIndex({ auth, brands }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [newBrandImage, setNewBrandImage] = useState(null);
  const [currentBrands, setCurrentBrands] = useState(brands);
  const [brandToDelete, setBrandToDelete] = useState(null);

  useEffect(() => {
    setCurrentBrands(brands);
  }, [brands]);

  const addBrand = async () => {
    if (!newBrandName || !newBrandImage) {
      // Display an error message or handle the missing data as needed.
      console.error('Brand Name and Image are required.');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', newBrandName);
    formData.append('image', newBrandImage);
  
    try {
      // Send the request to add a new brand
      const response = await axios.post('/brands', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Brand added successfully:', response.data);
  
      // Add the new brand to the currentBrands
      setCurrentBrands([...currentBrands, response.data]);
  
      // Close the modal and reset form inputs
      setShowAddModal(false);
      setNewBrandName('');
      setNewBrandImage(null);
  
    
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  const deleteBrand = (brand) => {
    // Show the delete confirmation modal
    setBrandToDelete(brand);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (brand) => {
    try {
      // Make a DELETE request to the server to delete the brand
      await axios.delete(`/brands/${brand.id}`);
      console.log(`Brand ${brand.name} deleted.`);

      // Remove the deleted brand from currentBrands
      setCurrentBrands(currentBrands.filter((item) => item.id !== brand.id));
  
      // Close the modal
      setShowDeleteModal(false);
      setBrandToDelete(null);
  
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get('/brands');
      if (response.data) {
        setCurrentBrands(response.data.brands);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="fw-bold fs-4 text-dark">Brands</h2>}
    >
      <Head title="Brands" />
      
      {/* Add a new brand */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          Add Brand
        </button>
      </div>

      <div className="brand-container">
        {currentBrands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={'/storage/' + brand.image_path } alt={brand.name} />
            <button onClick={() => deleteBrand(brand)}>Delete</button>    
          </div>  
        ))}
      </div>

      <Modal className="modal-content" show={showAddModal} onClose={() => setShowAddModal(false)}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Brand Name"
            value={newBrandName}
            onChange={(e) => setNewBrandName(e.target.value)}
            required
          />
          <input
            type="file"
            className="form-control"
            onChange={(e) => setNewBrandImage(e.target.files[0])}
            required
            accept=".jpg, .jpeg, .png" // Specify accepted file types
          />
          <button className="add-button" onClick={addBrand}>
            Add
          </button>
        </form>
      </Modal>    

      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {brandToDelete ? brandToDelete.name : 'this brand'}?</p>
        <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
        <button onClick={() => confirmDelete(brandToDelete)}>Confirm</button>
      </Modal>
    </AuthenticatedLayout>
  );
}
