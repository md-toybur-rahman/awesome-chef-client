import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MdFavorite } from "react-icons/md";
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false)
    const { recipe_name, image_url, description } = recipe;
    console.log(recipe);
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
                    </div>
                </Card.Body>
                <div className='ms-3 mb-3'>
                    {
                        favorite ? <button style={{ backgroundColor: ' transparent', color: 'red', border: 'none' }} disabled><MdFavorite style={{ fontSize: '30px' }}></MdFavorite></button> : <button style={{ backgroundColor: ' transparent', color: 'gray', border: 'none' }} onClick={favoriteHandler}><MdFavorite style={{ fontSize: '30px' }}></MdFavorite></button>
                    }
                    <ToastContainer></ToastContainer>

                </div>
            </Card>
        </div>
    );
};

export default RecipeCard;