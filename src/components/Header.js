import React from 'react'

function Header({firstPage}) {
  return (
    
    <div >
    <div className="et-hero-tabs-container">
    <a className="et-hero-tab" href="#tab-angular">Laptops</a>
    <a className="et-hero-tab" href="#tab-react">Phones</a>
    <a className="et-hero-tab" href="#tab-other">Contact us</a>
    <span className="et-hero-tab-slider" />
    </div>
    </div>
    
  )
}

export default Header