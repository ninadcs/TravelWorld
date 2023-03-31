import React from 'react'
import './home.css'
import image from '../../assets/img1.jpg.jpg'

const Home=()=> {
    return(
       <section className='home'>
        <div className="overlay"></div>
        <image src={image} type="image/jpg.jpg"></image>

       </section>
    )
}

export default Home