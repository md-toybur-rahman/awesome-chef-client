// import React from 'react';

import { Link, useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
    // const {id} = useParams();
    const recipe = useLoaderData();
    console.log(recipe);
    return (
        <div>
            <h1 style={{color: 'white'}}>{recipe.name}</h1>
            <img src={recipe.picture} alt="" />
            <Link to='/'><button className="custom-btn"> Go Back</button></Link>
        </div>
    );
};

export default Recipes;