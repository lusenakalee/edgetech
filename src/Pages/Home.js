import '../Pages/Home.css'
import Contact from '../components/Contact';
import Laptops from '../components/Laptops';
import Mobiles from '../components/Mobiles';
import Header from '../components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function Home() {
      return (
        <div>
        
       
          {/* Hero */}
          <section className="et-hero-tabs">
            <h1>EDGE TECHWORLD IT Solutions</h1>
            <h3>
             COMPUTER  |  LAPTOP  |  PHONE SOLUTIONS  
            </h3>
            <div className="et-hero-tabs-container "><Header  /></div>
          </section>
          {/* Main */}
          <main className="et-main">
            
          <section className="et-slide w-full" id="tab-angular">
         
              <Laptops/>
            </section>

            <section className="et-slide" id="tab-react">
              <Mobiles/>
            </section> 

            <section className='pb-10'></section>              
            
            <section className="et-slide" id="tab-other">
              <Contact/>
            </section>
          </main>
        </div>
        

      );
    }
 
    export default Home

  
  

