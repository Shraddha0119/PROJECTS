import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  const[countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(()=>{

   const timeoutId = setInterval(()=>{
    setCountdown(preCount=>{
      if(preCount === 1){
        clearInterval(timeoutId)
        navigate("/")
      }
      return preCount - 1;
    });
   },1000);

   return () => clearInterval(timeoutId)
  },[navigate])


  return <>

       <section className='notFound'>
          <div className='container'>
            <img src='/sandwich.png' alt='success'/>
            <h1>REDIRECTING TO HOME IN {countdown} seconds....</h1>
            <Link to={'/'}>back to home <HiOutlineArrowNarrowRight/></Link>
          </div>
       </section>
    </>
  
}
// console.log(Success);


export default Success