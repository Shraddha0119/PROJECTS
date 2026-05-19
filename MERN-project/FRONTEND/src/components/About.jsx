import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <div>
       <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>the only thing we're serious about is food</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, saepe minima repudiandae ratione id laborum modi quibusdam incidunt, fuga beatae eos commodi, sint ipsa molestiae libero nulla animi molestias cupiditate.
                </p>
                <Link to={"/"}> Explore Menu{""}
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src='/about.png' alt='about'/>
            </div>
        </div>

        </section> 
    </div>
  )
}

export default About