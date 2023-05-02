// import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container d-flex flex-column align-items-center justify-content-center">
            <h2 className='welcome'>Welcome to Our Website</h2>
            <h1 className='title'>Introduce With Best Chef</h1>
            <div className='d-flex gap-3 my-3'>
                <hr className='banner-hr' />
                <hr className='banner-hr' />
                <hr className='banner-hr' />
                <hr className='banner-hr' />
            </div>
            <p className='banner-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque unde temporibus vitae reiciendis modi facilis dolorem eligendi ullam rem nostrum recusandae numquam cum, quasi eos culpa. Debitis tempore accusantium omnis voluptatem odio tenetur consectetur quam non cum saepe doloribus sint in, quibusdam quidem nostrum expedita? Aut sunt molestias iusto!</p>
        </div>
    );
};

export default Banner;