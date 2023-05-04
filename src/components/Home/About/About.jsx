import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='img-container'>
                <img className='about-img' src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className='about'>
                <h2 className='aboutUs'>About Us</h2>
                <h1 className='about-title'>Between Haven & Earth</h1>
                <div className='d-flex gap-3 my-3 margin'>
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                </div>
                <p className='about-description'>The character and philosophy of our type of cuisine, which follows the ancestral technique of using different types of firewood, fire, charcoal and the scented trace of the smoke, inherently results in a limitation on the number of diners that we can accommodate without sacrificing our essence.</p>

                <h3 className='mb-3'>Whisper to us about your feelings, and we will prepare what you need now.</h3>

                <button className='custom-btn'>DISCOVER MORE</button>
            </div>
        </div>
    );
};

export default About;