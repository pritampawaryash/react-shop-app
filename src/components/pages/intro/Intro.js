import React from 'react'
import pic5 from "../../images/pic5.png";
import "./Intro.css";

export default function Intro() {
  return (
   <>
   <div className='bg-image container-fluid '>
    <div className='row'>
        <div className='col-6'>

        </div>
        <div className='col-6 '>
        <img className='ownerImg img-fluid ' src={pic5} />
        </div>
    </div>
   
   </div>
   </>
  )
}
