import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/Provider';

const Login = () => {
    const { signIn } = useContext(AuthProviderContext);
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then()
            .catch()
    }
    return (
        <div className='form-design'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSignIn} className='w-25 form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
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