import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="Navbar">
            <Link to="/"><h1>E-Kart</h1></Link>
            <Link to="/cart"><h2>Cart</h2></Link>
        </div>
    </header>
  )
}

export default Header