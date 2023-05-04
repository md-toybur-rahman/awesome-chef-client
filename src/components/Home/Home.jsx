// import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { CardGroup } from 'react-bootstrap';
import About from './About/About';
import Services from './Services/Services';
const Home = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div className='chef'>
                <h1 className='section-title text-center mb-5'>Our Chef's</h1>
                <CardGroup className='gap-3 justify-content-center'>
                    {
                        chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </CardGroup>
            </div>

            <div className='text-white'>
                    <About></About>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;