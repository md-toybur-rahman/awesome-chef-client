import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div className='nav-container d-flex align-items-center justify-content-between px-4'>
            <div className='menuIcon'>
                {
                    isClicked ? <MdClose onClick={clickHandler}></MdClose> : <MdMenu onClick={clickHandler}></MdMenu>
                }
            </div>
            <div className='logo'>
                <h1>Awes<span className='border border-3 border-warning-subtle rounded-circle'>👨‍🍳</span>me Chef</h1>
            </div>
                {
                    isClicked ?
                        <nav className='phone-page'>
                            <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/'>Home</NavLink>
                            <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/blog'>Blog</NavLink>
                        </nav>
                        : <nav className='page '>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/'>Home</NavLink>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/blog'>Blog</NavLink>
                    </nav>
                }
            <div className='d-flex align-items-center'>
                <div className='profile me-4'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
                <button className='custom-btn navbar-btn'>Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;