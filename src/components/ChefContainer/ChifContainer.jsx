import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './ChefContainer.css'

const ChifContainer = () => {
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div>
            <div className='chef'>
                <h1 className='section-title text-center'>Our Chef's</h1>
                <div className='d-flex gap-3 my-3'>
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                    <hr className='banner-hr' />
                </div>
                <div>
                    <h1 style={{ marginBottom: '0px', fontSize: '40px' }} className='section-title'>Select a Country</h1>
                    <div className='mt-2 text-center country-buttons'>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/bangladesh'>Bangladesh</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/japan'>Japan</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/pakistan'>Pakistan</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/romania'>Romania</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/turkish'>Turkish</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/india'>India</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/sri-lanka'>Sri-lanka</NavLink>
                        <NavLink className='m-2 custom-btn' style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/nepal'>Nepal</NavLink>
                    </div>
                </div>
                <div className='mt-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ChifContainer;