import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FcFullTrash } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa';
import Modal from '@/Components/Modal';
import '../../../css/CategoryIndex.css';

export default function CategoryIndex({ auth, categories }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryImage, setNewCategoryImage] = useState(null);
  const [currentCategories, setCurrentCategories] = useState([]);
  const[categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    setCurrentCategories(categories);
  }, [categories]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories');
      setCurrentCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addCategory = async () => {
    if (!newCategoryName || !newCategoryImage) {
      console.error('Category Name and Image are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', newCategoryName);
    formData.append('image', newCategoryImage);

    try {
      await axios.post('/categories', formData);
      console.log('Category added successfully.');

      setShowAddModal(false);
      setNewCategoryName('');
      setNewCategoryImage(null);
setCurrentCategories([...currentCategories, response.data]);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const deleteCategory = (category) => {
    setCategoryToDelete(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (category) => {
    try {
      await axios.delete(`/categories/${category.id}`);
      console.log(`Category ${category.name} deleted.`);

      setShowDeleteModal(false);
      setCategoryToDelete(null);

      // Fetch updated categories after deleting
setCurrentCategories(currentCategories.filter((item) => item.id !== category.id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="page-title">Categories</h2>}>
      <Head title="Categories" />
      <div className="button-container">
        <button className="add-button" onClick={() => setShowAddModal(true)}>
          <FaPlus /> Add
        </button>
      </div>
      <div className="category-container">
        {currentCategories.map((category,index) => (
          <div key={index} className="category-card">
            <div className="category-image-container">
              <FcFullTrash
                size={25}
                onClick={() => deleteCategory(category)}
                className="delete-icon"
              />
              <img
                src={'/storage/' + category.image_path}
                alt={category.name}
                className="category-image"
              />
            </div>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
      <Modal className="modal-content" show={showAddModal} onClose={() => setShowAddModal(false)} states={'Add Category'}>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            required
          />
          <input
            type="file"
            className="form-control"
            onChange={(e) => setNewCategoryImage(e.target.files[0])}
            required
            accept=".jpg, .jpeg, .png"
          />
          <button className="add-button" onClick={addCategory}>
            Add
          </button>
        </form>
      </Modal>
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        states={'Delete Category'}
        maxWidth="2xl"
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {categoryToDelete ? categoryToDelete.name : 'this category'}?</p>
        <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>
          Cancel
        </button>
        <button className="confirm-button" onClick={() => confirmDelete(categoryToDelete)}>
          Confirm
        </button>
      </Modal>
    </AuthenticatedLayout>
  );
}
