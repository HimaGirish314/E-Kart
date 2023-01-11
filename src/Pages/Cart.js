import React, { useContext } from 'react'
import { appContext } from './../Components/Context/Context';
import './Cart.css'
const Cart = () => {
  const {busket,setBusket}=useContext(appContext)
  console.log(busket)
  return (
    <div>
      {
        busket.map((data)=>{
          const {id,name,price,image}=data;
          return (
            <div className='main-container'>
              <div className='cart-card'>
              <div className="imageCart-card">
                  <img src={image} alt="product-logo" />
                  <h4>{name}</h4>
              </div>
              <div className="cartCard-details">
                  <p>{price}/-</p>
                  <button onClick={()=>{}}>Remove</button>
              </div>
            </div>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Cart