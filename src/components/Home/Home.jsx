// import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { CardGroup } from 'react-bootstrap';
import About from './About/About';
import { useContext, useState } from 'react';
import { AuthProviderContext } from '../../Provider/Provider';
const Home = () => {
    const chefData = useLoaderData();
    const [clicked, isClicked] = useState(false);
    const clickHandler = () => {
        isClicked(true);
    }
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div className='mt-5 d-flex align-items-center justify-content-center gap-4'>
                <Link onClick={clickHandler} to={'/bangladesh'}><button className="custom-btn">Bangladesh</button></Link>
                <Link onClick={clickHandler} to={'/japan'}><button className="custom-btn">Japan</button></Link>
                <Link onClick={clickHandler} to={'/pakistan'}><button className="custom-btn">Pakistan</button></Link>
                <Link onClick={clickHandler} to={'/romania'}><button className="custom-btn">Romania</button></Link>
                <Link onClick={clickHandler} to={'/turkish'}><button className="custom-btn">Turkish</button></Link>
                <Link onClick={clickHandler} to={'/india'}><button className="custom-btn">India</button></Link>
                <Link onClick={clickHandler} to={'/sri-lanka'}><button className="custom-btn">Sri-lanka</button></Link>
                <Link onClick={clickHandler} to={'/nepal'}><button className="custom-btn">Nepal</button></Link>
            </div>

            {
                !clicked ?
                    <div className='chef'>
                        <h1 className='section-title text-center mb-5'>Our Chef's</h1>
                        <CardGroup className='gap-3 justify-content-center'>
                            {
                                chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                            }
                        </CardGroup>
                    </div> 
                    : <div></div>
            }
            <div>
                <Outlet></Outlet>
            </div>

            <div className='text-white'>
                <About></About>
            </div>


        </div>
    );
};

export default Home;