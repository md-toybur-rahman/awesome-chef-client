import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthProviderContext } from '../../Provider/Provider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, user, googleSignUp, githubSignUp } = useContext(AuthProviderContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                if(error.message === 'Firebase: Error (auth/wrong-password).'){
                    setError('Wrong Password. Please try again.')
                }
                else if(error.message == 'Firebase: Error (auth/user-not-found).'){
                    setError('User Not Found')
                }
            })
    }
    const googleHandle = () => {
        googleSignUp()
            .then(res => {
                console.log(res.user)
                navigate(from, { replace: true })
            })
            .catch()
    }
    const githubHandle = () => {
        githubSignUp()
            .then(res => {
                console.log(res.user)
                navigate(from, { replace: true })
            })
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
                        {error == 'User Not Found' ? <p className='text-danger'>User Not Found</p> : `We'll never share your email with anyone else.`}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    <p>{error == 'Wrong Password. Please try again.' ? <p className='text-danger'>Wrong Password. Please try again.</p> : 'Password should be less then 6 character'}</p>
                </Form.Text>
                <Form.Text className="text-white">
                    <p>Create a New Account Please <Link to='/register'>Sign up</Link></p>
                </Form.Text>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='custom-btn' type="submit">
                        Login
                    </button>
                </div>
                <div className='d-flex flex-column'>
                    <button onClick={googleHandle} className='custom-btn mt-3 d-flex align-items-center justify-content-center'><FaGoogle className='me-2'></FaGoogle> Sign In With Google</button>
                    <button onClick={githubHandle} className='custom-btn mt-3 d-flex align-items-center justify-content-center'><FaGithub className='me-2'></FaGithub> Sign In With Github</button>
                </div>
            </Form>
        </div>
    );
};

export default Login;