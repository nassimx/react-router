import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul className="menu">
                <Link to="/"><li className="menu-item">Home</li></Link>
                <Link to="/login"><li className="menu-item">Login</li></Link>
                <Link to="/products"><li className="menu-item">Products</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
