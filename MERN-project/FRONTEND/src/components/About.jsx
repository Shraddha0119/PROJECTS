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
                   Welcome to our hotel, where delicious food meets unforgettable experiences. 
                   From rich flavors and freshly prepared dishes to a warm and elegant dining atmosphere, 
                   we serve meals that satisfy every craving. Our chefs carefully craft every dish using 
                   high-quality ingredients, bringing you the perfect blend of taste, freshness, and passion. 
                   Whether you are enjoying a family dinner, a romantic evening, or a quick meal with friends, 
                   our restaurant promises exceptional service and mouthwatering flavors in every bite. 
                   Come and experience the joy of great food, comfort, and hospitality all in one place.
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