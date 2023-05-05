import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChefCardContainer = () => {
    const chefData = useLoaderData();

    return (
        <div>
            <CardGroup className='gap-3 justify-content-center'>
                {
                    chefData.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </CardGroup>
        </div>
    );
};

export default ChefCardContainer;