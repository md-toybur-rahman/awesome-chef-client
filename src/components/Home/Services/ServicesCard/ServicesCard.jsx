import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './ServicesCard.css'

const ServicesCard = ({service}) => {
    const {id, service_name, description} = service;
    return (
        <div className='skill'>
            <Card style={{ width: '18rem', backgroundColor: '#0E1317', color: 'white', border: '2px solid #C19977' }}>
                <Card.Body>
                    <h3 className='my-3' style={{color: '#C19977'}}>{id}</h3>
                    <h3 className='mb-4'>{service_name}</h3>
                    <Card.Text>
                        <span style={{color: 'gray'}}>{description}</span>
                    </Card.Text>
                    <Link><button className='custom-btn mt-4'><FaArrowRight></FaArrowRight></button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServicesCard;