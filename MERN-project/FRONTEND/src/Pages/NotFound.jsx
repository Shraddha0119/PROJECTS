import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const NotFound = () => {
  return (
    <>
     <section className='notFound'>
      <div className="container">
        <img src='/notFound.svg' alt='notfound'/>
        <h1>LOOKS LIKE YOU'RE LOSS</h1>
        <p>we cant seem to find you the page you're looking for</p>
        <Link to={'/'}>Back to Home{""}
         <span>
          <HiOutlineArrowNarrowRight/>
         </span>
         </Link>
      </div>
     </section>
    </>
  )
}

export default NotFound