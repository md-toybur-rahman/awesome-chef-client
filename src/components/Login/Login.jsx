import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-design'>
            <h2>Please Login</h2>
            <Form className='w-25 form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-white">
                    <p>Create a New Account Please <Link to='/register'>Sign up</Link></p>
                </Form.Text>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='custom-btn' type="submit">
                        Login
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Login;