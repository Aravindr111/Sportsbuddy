import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu'

import './Sports.css'


const UserList =()=>{
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
      }, []);
    
      const fetchUser = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/Users');
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };

      const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this event?'))
             {
          try {
            await axios.delete(`http://localhost:3000/api/Users/${id}`);
            setUser(users.filter(user => user._id !== id)); 
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
          <h2>Users</h2>
         {users.map((user) =>(
          <div key={user._id} className='sports-table'>
            <h3>{user.name}</h3>
            <div className='sports-buttons'> 
              <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
              
            </div>
            </div>
           
          )
          )}
        
        </div>
        </>
      )
    }
    
    export default UserList;