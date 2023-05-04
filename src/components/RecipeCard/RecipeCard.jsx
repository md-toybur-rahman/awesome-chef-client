import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false)
    const { recipe_name, image_url, description, ingredients, rating } = recipe;
    const favoriteHandler = () => {
        setFavorite(true);
        toast("Added to Favorite");

    }
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#0E1317', color: 'white', border: '2px solid #C19977', height: '100%' }}>
                <Card.Img style={{ height: '284px' }} variant="top" src={image_url} />
                <Card.Body>
                    <h3>{recipe_name}</h3>
                    <div>
                        <h5 className='my-3'>{description}</h5>
                        <h6>Ingredients: {ingredients}</h6>
                    </div>
                    <div className='flex-grow-1 d-flex align-items-center my-3 text-muted'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-2'>{rating}</span>
                    </div>
                </Card.Body>
                <div className='ms-3 mb-3'>
                    <button onClick={favoriteHandler} className={!favorite ? 'custom-btn' : 'custom-btn-disabled'} disabled={!favorite ? false : true}>Favorite</button>
                    <ToastContainer></ToastContainer>

                </div>
            </Card>
        </div>
    );
};

export default RecipeCard;