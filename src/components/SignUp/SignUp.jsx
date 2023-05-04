import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/Provider';

const SignUp = () => {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthProviderContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.pathname || '/'
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        if(password.length > 6){
            setError('Sorry! Password should be less than 6 characters')
            return ;
        }
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)  
    }
    return (
        <div className='form-design'>
            <h2>Create an Account</h2>
            <Form onSubmit={handleSignUp} className='w-full form'>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" required/>
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
                <Form.Text className="text-white">
                    <p>The Password should be less than 6 characters</p>
                    <p className='text-danger'>{error}</p>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={"Accept Terms and Condition"} />
                </Form.Group>
                <Form.Text className="text-white">
                    <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                </Form.Text>
                <div className='d-flex justify-content-center mt-5'>
                    <button className={!accepted ? 'custom-btn-disabled':'custom-btn'} disabled={!accepted} type="submit">
                        Sign Up
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;