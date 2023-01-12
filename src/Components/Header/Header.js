import React,{useContext} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { appContext } from './../Context/Context';
const Header = () => {
 const {busket}=useContext(appContext)
 const value=busket.reduce((acc,curr)=>{
    return acc +=curr.quantity
  },0)

// const cartItems=()=>{
//   const value=busket.reduce((acc,curr)=>{
//   return acc +=curr.quantity
// },0)
// setCartValue(value)
// }
// useEffect(()=>{
//   cartItems()
// })
  return (
    <header>
        <div className="Navbar">
            <Link to="/"><h1>E-Kart</h1></Link>
            <Link to="/cart"><h2>Cart<sup>{value}</sup></h2></Link>
        </div>
    </header>
  )
}

export default Header