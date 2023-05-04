import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard/ServicesCard';
import { CardGroup } from 'react-bootstrap';

// .service {
//     margin-top: 100px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }
const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='text-white'>
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