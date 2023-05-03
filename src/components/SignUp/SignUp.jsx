import React from 'react';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-design'>
            <h2>Create an Account</h2>
            <Form className='w-25 form'>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Trams and Condition" />
                </Form.Group>
                <Form.Text className="text-white">
                    <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                </Form.Text>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='custom-btn' type="submit">
                        Sign Up
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;