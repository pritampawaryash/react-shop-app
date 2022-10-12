import React from 'react'
import pic5 from "../../images/pic5.png";
import logo from "../../images/logo.png";

import "./Intro.css";

export default function Intro() {
  return (
   <>
   <div className='bg-image container-fluid '>
    <div className='row'>
        <div className='   align-items-center text-center mt-5' >
        
        <img href="#home" src={logo}  height="120" alt="" className="mainLogo"></img>

        
        <h3 className="animate-charcter fw-bold">AUTO BOYS</h3>
        <h3 className='work text-white '>The ROYAL ENFIELD Workshop</h3>
        <h4 className='text-white'>Since 2019</h4>
        <p className='welcome mt-5'>Welcome to AUTO BOYS </p>
        </div>
        {/* <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          
        <img className='ownerImg img-fluid ' src={pic5} />
        </div> */}
    </div>
   
   </div>
   </>
  )
}
