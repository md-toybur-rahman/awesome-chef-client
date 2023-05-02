// import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { CardGroup } from 'react-bootstrap';
const Home = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div className='chef'>
                <h1 className='title text-center mb-5'>Our Chef's</h1>
                <CardGroup className='gap-3 justify-content-center'>
                    {
                        chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Home;