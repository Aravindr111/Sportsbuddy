import React from 'react';
import Header from "./homecomponents/Header"
import './homecomponents/Home.css'
import Menu from './homecomponents/Menu'
import EventsList from "./homecomponents/Eventlist";

function Home(){
 
  return(

    <div>
    <Header/>
    <Menu/>
    <EventsList/>
    </div>
  )

};

export default Home;