import { list } from 'postcss';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const routes = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
          },
          {
            "id": 2,
            "name": "About",
            "path": "/about"
          },
          {
            "id": 3,
            "name": "Services",
            "path": "/services"
          },
          {
            "id": 4,
            "name": "Contact",
            "path": "/contact"
          },
          {
            "id": 5,
            "name": "Blog",
            "path": "/blog"
          }
          
    ]
    return (
        <nav>
            <ul className='nav-ul'>
                {
                    routes.map(route => <li>{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;