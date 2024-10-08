import React, { useState } from 'react';
import axios from 'axios';
import './AddSports.css'

const AddCityForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    
          const response = await axios.post('http://localhost:3000/api/Cities/add', formData);
          alert(response.data.message); 
          setFormData({ name: ''}); 
          onClose(); 
          window.location.reload();
        } catch (error) {
          console.error('Error adding City:', error);
          alert('Failed to add City'); 
        }
      };
      if (!isOpen) return null;
      return (
        <div className="modal">
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2 >Add a New City</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add City</button>
        </form>
    </div>
  </div>
      );
    }

export default AddCityForm;