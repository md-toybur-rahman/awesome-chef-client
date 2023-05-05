// import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { CardGroup } from 'react-bootstrap';
import About from './About/About';
import { useContext, useState } from 'react';
import { AuthProviderContext } from '../../Provider/Provider';
import Services from './Services/Services';
import ServicesCard from './Services/ServicesCard/ServicesCard';
const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
            <div className='text-white'>
            <div>
                <div style={{ marginTop: '100px' }} className='text-white'>
                    <h1 style={{ color: '#C19977', marginBottom: '40px' }} className='text-center section-title'>Our Services</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardGroup className='gap-5 justify-content-center'>
                            {
                                services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                            }
                        </CardGroup>
                    </div>
                </div>
            </div>
                <About></About>
            </div>
            {/* 
            <div className='chef'>
                <h1 className='section-title text-center mb-5'>Our Chef's</h1>
                <CardGroup className='gap-3 justify-content-center'>
                    {
                        chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </CardGroup>
            </div> */}




        </div>
    );
};

export default Home;