import React, { useContext} from 'react'
import { appContext } from './../Components/Context/Context';
import './Cart.css';
import {RiDeleteBin6Line} from 'react-icons/ri'
const Cart = () => {
  const {busket,setBusket}=useContext(appContext);
  const handleRemove=(id)=>{
    const newarray=busket.filter((res)=>{
      return id !== res.id
    })
    setBusket(newarray)
  }
  const totalPrice =busket.reduce((acc,curr)=>{
      return acc+curr.price*curr.quantity
  },0)
  const handleQuantity=(ind,d)=>{
    const quantityArray=busket
    quantityArray[ind].quantity +=d
    setBusket([...quantityArray])
  }
  return (
    <div>
      {
        busket.map((data,ind)=>{
          const {id,name,price,image,quantity}=data;
          return (
            <div className='main-container'>
                <div className='cart-card'>
                  <div className="imageCart-card">
                      <img src={image} alt="product-logo" />
                      <h4>{name}</h4>
                  </div>
                  <div className="cartCard-details">
                      <p className='product-price'>{price}/-</p>
                      <div className="incrementButton">
                        <button onClick={()=>{handleQuantity(ind,-1)}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={()=>{handleQuantity(ind,1)}}>+</button>
                      </div>
                  </div>
                  <div className="button">
                  <button className='remove-button' onClick={()=>{handleRemove(id)}}><RiDeleteBin6Line /></button>
                  </div>
              </div>
            </div>            
          )
        })
      }
      <div className="totalPrice">
        <h2>Total Price:{totalPrice}/-</h2>
      </div>
    </div>
  )
}

export default Cart