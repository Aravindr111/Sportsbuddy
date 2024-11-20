import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Sport from './pages/homecomponents/Sportslist'
import City from './pages/homecomponents/Citylist';
import User from './pages/homecomponents/Userlist';
import SearchEvents from './pages/homecomponents/Search';

function App() {
  return (
    <>
    <Router>
         
         <Routes>
           <Route path="/" element={<Signup/>} />
           <Route path="/Login" element={<Login/>} />
           <Route path="/Home" element={<Home/>} />
           <Route path="/Sport" element={<Sport/>} />
           <Route path="/City" element={<City/>} />
           <Route path="/User" element={<User/>} />
           <Route path="/Search" element={<SearchEvents/>}/>
         </Routes>
       </Router>
    </>
  );
}

export default App;
