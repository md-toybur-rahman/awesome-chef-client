import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const RecipeCard = ({recipe}) => {
    const [favorite, setFavorite] = useState(false)
    const {recipe_name, image_url} = recipe;
    const favoriteHandler = () => {
        setFavorite(true);
    }
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#0E1317', color: 'white', border: '2px solid #C19977' }}>
                <Card.Img style={{height: '284px'}} variant="top" src={image_url} />
                <Card.Body>
                    <h3>{recipe_name}</h3>
                    <div>
                        <h5>Years of Experience: {}</h5>
                        <h5>Number of Recipes: {}</h5>
                        <h6 className='d-flex align-items-center gap-2'><span className='fs-4'>❤</span> {}</h6>
                    </div>
                    {
                        favorite ? <button className='custom-btn' disabled><MdFavorite></MdFavorite></button> : <button onClick={favoriteHandler} className='custom-btn'><MdFavoriteBorder></MdFavoriteBorder></button>
                    }
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;