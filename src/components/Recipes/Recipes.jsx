// import React from 'react';
import { CardGroup } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Recipes.css'

import { Link, useLoaderData } from "react-router-dom";

const Recipes = () => {
    const recipe = useLoaderData();
    const { name, experience, recipes, description } = recipe;
    console.log(recipe);
    return (
        <div className=''>
            <div className='mb-5 d-flex justify-content-center single-chef-container'>
                <div className='mt-5 d-flex align-items-center chef-container'>
                    {/* <img className="chef-image me-4" src={picture} alt="" /> */}
                    <div className='chef-info text-center' style={{ color: 'white' }}>
                        <h1>{name}</h1>
                        <div className='d-flex justify-content-center gap-3 my-3'>
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                        </div>
                        <h5>Years of Experience: {experience}</h5>
                        <h6>{description}</h6>
                    </div>
                </div>
            </div>
            <div className='chef'>
                <h1 className='title text-center mb-5'>{name} Recipes</h1>
                <CardGroup className='gap-3 justify-content-center'>
                    {
                        recipes.map(recipe => <RecipeCard key={Math.random()} recipe={recipe}></RecipeCard>)
                    }
                </CardGroup>
            </div>
            <div className='text-center my-5'>
                <Link to='/'><button className="custom-btn"> Go Back</button></Link>
            </div>
        </div>
    );
};

export default Recipes;