import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#0E1317', color: 'white', border: '2px solid #C19977' }}>
                <Card.Img className="chef-picture" variant="top" src={picture} />
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        <h5>Years of Experience: {experience}</h5>
                        <h5>Number of Recipes: {recipes.length}</h5>
                        <h6 className='d-flex align-items-center gap-2'><span className='fs-4'>❤</span> {likes}</h6>
                    </Card.Text>
                    <button className='custom-btn'></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;