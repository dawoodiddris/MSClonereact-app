import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar'
import OpenMessage from './components/OpenMessage'
import Product from './components/Product'
import Activity from './components/Activity'

function App() {
  return (

    <div>
        <Navbar />

        <OpenMessage />

        <Product />

        <Activity />

        <footer className="container-fluid mt-5" style={{height: '300px', background: '#E9ECEF', color: '#000000'}}>
       <div className="row">
           <div className="col-2 mt-5">
             <p>What's new</p>
           </div>

           <div className="col-2 mt-5">
            <p>Microsoft Store</p>
          </div>

          <div className="col-2 mt-5">
            <p>Education</p>
          </div>

          <div className="col-2 mt-5">
            <p>Enterprise</p>
          </div>

          <div className="col-2 mt-5">
            <p>Developer</p>
          </div>

          <div className="col-2 mt-5">
            <p>Company</p>
          </div>
       </div>
   </footer>
    </div>


  );
}

export default App;
