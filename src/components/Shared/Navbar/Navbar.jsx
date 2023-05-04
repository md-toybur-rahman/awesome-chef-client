import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";
import { useContext, useState } from 'react';
import { AuthProviderContext } from '../../../Provider/Provider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthProviderContext);
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className='nav-container d-flex align-items-center justify-content-between px-4'>
            <div className='menuIcon'>
                {
                    isClicked ? <MdClose onClick={clickHandler}></MdClose> : <MdMenu onClick={clickHandler}></MdMenu>
                }
            </div>
            <div className='logo'>
                <h1><Link to='/'>Awes<span className='border border-3 border-warning-subtle rounded-circle'>👨‍🍳</span>me Chef</Link></h1>
            </div>
            {
                isClicked ?
                    <nav className='phone-page'>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/'>Home</NavLink>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/blog'>Blog</NavLink>
                        <NavLink style={!user ? {display: 'block', border: '1px solid #C19977', padding: '5px', marginTop: '10px'} : {display: 'none'}} to='/login'>Login</NavLink>
                        <NavLink onClick={handleLogOut} style={user ? {display: 'block', border: '1px solid #C19977', padding: '5px', marginTop: '10px'} : {display: 'none'}} to='/'>Logout</NavLink>
                        
                    </nav>
                    : <nav className='page '>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/'>Home</NavLink>
                        <NavLink style={({ isActive }) => isActive ? { color: '#C19977' } : { color: 'white' }} to='/blog'>Blog</NavLink>
                    </nav>
            }
            <div className='d-flex align-items-center'>
                <div className={`profile me-4  ${user?.displayName ? 'tooltip-name' : ''}`}>
                    <img src={!user?.photoURL? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : user.photoURL} alt="" />
                    {
                        user?.displayName ? <span className='tooltipText'>{user?.displayName}</span> : <></>
                    }
                </div>
                {
                    user ?
                        <Link onClick={handleLogOut}><button className='custom-btn navbar-btn'>Log Out</button></Link>
                        : <Link to='/login'><button className='custom-btn navbar-btn'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;