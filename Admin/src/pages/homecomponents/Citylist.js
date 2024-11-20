import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu'
import './Sports.css'
import AddCity from './AddCity';

const CityList =()=>{
  const [cities, setCity] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  
  const openModal = () => setModalOpen(true);

  
  const closeModal = () => setModalOpen(false);

    useEffect(() => {
        fetchCity();
      }, []);
      const fetchCity = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/Cities');
          setCity(response.data);
        } catch (error) {
          console.error('Error fetching City:', error);
        }
      };

      const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this City?')) {
          try {
            await axios.delete(`http://localhost:3000/api/Cities/${id}`);
            setCity(cities.filter(event => event._id !== id)); 
            alert('City deleted successfully');
          } catch (error) {
            console.error('Error deleting event:', error);
            alert('Failed to delete City');
          }
        }
      };
      return(
        <>
        
        <div id="header">  
        <div id="header-item">
        <h1 id="logo">Sports-Buddy</h1>
        </div>
        <div class="header-item">
            <Link to="/" className="logout">LogOut</Link>
        </div>  
        </div>
        <Menu/>
        <div className='table-container'>
          <h2>City</h2>
          <button className="add-sport-button" onClick={openModal}>
        Add 
       </button>
       <AddCity isOpen={isModalOpen} onClose={closeModal} />
         {cities.map((city) =>(
          <div key={city._id} className='sports-table'>
            <h3>{city.name}</h3>
            <div className='sports-buttons'> 
            <button className="delete-button" onClick={() => handleDelete(city._id)}>Delete</button>
              
            </div>
            </div>
           
          )
          )}
        
        </div>
        </>
      )

};

export default CityList;