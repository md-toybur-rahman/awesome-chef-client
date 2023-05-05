import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './ChefCard.css'
import { Card, Spinner } from "react-bootstrap";

const ChefCard = ({ chef }) => {
    const { name, picture, experience, recipes, likes, id } = chef;
    return (
        <div className='chef-card'>
            <Card style={{ width: '18rem', backgroundColor: '#0E1317', color: 'white', border: '2px solid #C19977' }}>
                <LazyLoad height={400} offset={300}  threshold={1} onContentVisible={() => <div className='spinner-container'>
            <Spinner className='spinner' animation="border" />
        </div>}>
                    <Card.Img className="chef-picture" variant="top" src={picture} />
                </LazyLoad>
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        <span>Years of Experience: {experience}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>Number of Recipes: {recipes.length}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='d-flex align-items-center gap-2'><span className='fs-4'>❤</span> {likes}</span>
                    </Card.Text>
                    <Link to={`/chef/${id}`}><button className='custom-btn'>View Recipes</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;