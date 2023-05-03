import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthProviderContext } from '../../Provider/Provider';

const SignUp = () => {
    const { createUser, user } = useContext(AuthProviderContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                userName(name);
            })
            .catch(error => console.log(error))
        user.displayName = name;
    }
    return (
        <div className='form-design'>
            <h2>Create an Account</h2>
            <Form onSubmit={handleSignUp} className='w-25 form'>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
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
                <div className='d-flex flex-column'>
                    <button className='custom-btn mt-3 d-flex align-items-center justify-content-center'><FaGoogle className='me-2'></FaGoogle> Sign In With Google</button>
                    <button className='custom-btn mt-3 d-flex align-items-center justify-content-center'><FaGithub className='me-2'></FaGithub> Sign In With Github</button>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;