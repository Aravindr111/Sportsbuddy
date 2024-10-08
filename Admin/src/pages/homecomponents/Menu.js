import React from "react";
import { Link,useLocation } from 'react-router-dom';
import './Home.css'
function Menu(){
  const location = useLocation();
  
    return(
        <div className="admin-home-container">
        <h2>Admin Dashboard</h2>
        <div className="card-container">
        <Link  className={`nav-card ${location.pathname === '/Home' ? 'active' : ''}`} to="/Home" >
        <div className="card-overlay">
        <p className="link">Home</p>
        </div>
        </Link>
        <Link className={`nav-card ${location.pathname === '/Sport' ? 'active' : ''}`} to="/Sport" >
        <div className="card-overlay">
        <p className="link">Sports</p>
        </div>
        </Link>
        <Link className={`nav-card ${location.pathname === '/City' ? 'active' : ''}`} to="/City" >
        <div className="card-overlay">
        <p className="link">City</p>
        </div>
        </Link>
        <Link className={`nav-card ${location.pathname === '/User' ? 'active' : ''}`}to="/User" >
        <div className="card-overlay">
        <p className="link">Users</p>
        </div>
        </Link>
        <Link className={`nav-card ${location.pathname === '/Search' ? 'active' : ''}`}to="/Search" >
        <div className="card-overlay">
        <p className="link">Search</p>
        </div>
        </Link>
        </div>
      </div>



    )

};

export default Menu;