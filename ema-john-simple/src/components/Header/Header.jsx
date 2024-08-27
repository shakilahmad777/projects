import React from 'react';
import './Header.css'
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;