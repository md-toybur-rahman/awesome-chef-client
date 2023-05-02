// import React from 'react';
import { MdLocationPin, MdPhone, MdMail } from "react-icons/md";
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ color: 'white' }} className=" footer">
            <div>
                <h2 className="mb-5">Contacts</h2>
                <div>
                    <h4 className="d-flex gap-3 fs-5"><MdLocationPin></MdLocationPin> Jakshin Bazar, Dhanmondi, Dhaka</h4>
                    <h4 className="d-flex gap-3 fs-5"><MdPhone></MdPhone> +8801320029</h4>
                    <h4 className="d-flex gap-3 fs-5"><MdMail></MdMail> toyburrahman48@gamil.com</h4>
                </div>
            </div>
            <div className="footer-middle">
                <h1>Awes<span className='border border-3 border-warning-subtle rounded-circle'>👨‍🍳</span>me Chef</h1>
                <h3 className="mt-4 fs-5">Whisper to us about your feelings, and we will prepare what you need now.</h3>
            </div>
            <div>
            <h2 className="mb-5 text-center md:text-end">Working Hours</h2>
                <div className="d-flex flex-column align-items-end">
                    <h4 className="d-flex gap-3 fs-5"><span style={{color: '#C19977'}}>Mon-Fri: </span>7.00am - 6.00pm</h4>
                    <h4 className="d-flex gap-3 text-right fs-5"><span style={{color: '#C19977'}}>Sat: </span>7.00am - 6.00pm</h4>
                    <h4 className="d-flex gap-3 fs-5"><span style={{color: '#C19977'}}>Sun: </span>7.00am - 6.00pm</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;