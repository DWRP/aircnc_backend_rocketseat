import React from 'react';


import Routes from './routes';

import './App.css';

import logo from './assets/aircnc_logo.png'

function App() {

  return (
   <div className="container">

     <img src={logo} alt="AirCnC logo" id="logo_page"/>

     <div className="content">
       
       <Routes />
       
     </div>
     
   </div>
  );
}

export default App;
