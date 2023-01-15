import React,{useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { appContext } from './../Context/Context';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
 const {busket,searchTerm,setSearchTerm}=useContext(appContext)
 const value=busket.reduce((acc,curr)=>{
    return acc +=curr.quantity
  },0)
  return (
    <header>
        <div className="Navbar">
            <Link to="/"><h1>E-Kart</h1></Link>
            <input type="text" value={searchTerm}  placeholder='Search here...' onChange={(e)=>setSearchTerm(e.target.value)} />
            <Link to="/cart"><h2><AiOutlineShoppingCart className='cart' /><sup>{value}</sup></h2></Link>
        </div>
    </header>
  )
}

export default Header