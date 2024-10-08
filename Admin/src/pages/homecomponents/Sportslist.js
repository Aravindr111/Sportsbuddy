import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu'

import './Sports.css'
import AddSport from './AddSports'

const SportsList =()=>{
    const [sports, setSports] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

  
  const openModal = () => setModalOpen(true);

  
  const closeModal = () => setModalOpen(false);


useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/Sports');
      setSports(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`http://localhost:3000/api/Sports/${id}`);
        setSports(sports.filter(event => event._id !== id)); 
        alert('Event deleted successfully');
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Failed to delete event');
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
      <h2>Sports</h2>
      <button className="add-sport-button" onClick={openModal}>
        Add 
       </button>
       <AddSport isOpen={isModalOpen} onClose={closeModal} />
     {sports.map((sport) =>(
      <div key={sport._id} className='sports-table'>
        <h3>{sport.name}</h3>
        <div className='sports-buttons'> 
          <button className="delete-button" onClick={() => handleDelete(sport._id)}>Delete</button>
          
        </div>
        </div>
       
      )
      )}
    
    </div>
    </>
  )
}

export default SportsList;
  