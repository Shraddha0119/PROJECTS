import React from 'react'
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Our dishes are prepared with fresh ingredients, rich flavors, and a perfect blend of spices to create an unforgettable dining experience. Every meal is carefully crafted with passion, offering delicious taste, beautiful presentation, and satisfying quality in every bite. From comforting meals to flavorful specialties, our food brings warmth, freshness, and happiness to your table..</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return (
                            <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    </section>
  )
}

export default Menu