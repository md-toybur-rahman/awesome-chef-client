import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChifContainer = () => {
    const chefData = useLoaderData();
    return (
        <div>
            <div className='chef'>
                <h1 className='section-title text-center mb-5'>Our Chef's</h1>
                <CardGroup className='gap-3 justify-content-center'>
                    {
                        chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default ChifContainer;