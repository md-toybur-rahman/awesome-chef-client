import React from 'react';
import { CardGroup } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Recipes.css'

import { Link, useLoaderData } from "react-router-dom";

const Recipes = () => {
    const recipe = useLoaderData();
    const { name, experience, recipes, description, picture, likes, country } = recipe;
    return (
        <div className=''>
            <div className='mb-5 d-flex justify-content-center single-chef-container'>
                <div className='mt-5 d-flex gap-5 align-items-center chef-container'>
                    <div>
                        <img style={{ height: '300px', borderRadius: '10px' }} src={picture} alt="" />
                        <h1 className='name mt-3'>{name}</h1>
                    </div>
                    <div className='chef-info text-left' style={{ color: 'white' }}>
                        <div className='d-flex  gap-3 my-3'>
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                        </div>
                        <h5>Years of Experience: {experience}</h5>
                        <h6>Short Bio: {description}</h6>
                        <h6>Country: {country}</h6>
                        <h6>Likes: {likes}</h6>
                        <h6>Number Of Recipe: {recipes.length}</h6>
                        <div className='d-flex gap-3 my-3'>
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                            <hr className='banner-hr' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='chef'>
                <h1 className='section-title text-center mb-5'>{name} Recipes</h1>
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