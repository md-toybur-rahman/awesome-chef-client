import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard/ServicesCard';
import { CardGroup } from 'react-bootstrap';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div style={{marginTop: '100px'}} className='text-white'>
            <h1 style={{color: '#C19977', marginBottom: '40px'}} className='text-center section-title'>Our Services</h1>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <CardGroup className='gap-5 justify-content-center'>
                    {
                        services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Services;