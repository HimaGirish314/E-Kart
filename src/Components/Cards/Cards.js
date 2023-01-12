import React,{useContext} from 'react';
// import Card from './Card';
import './Cards.css';
import { Products } from './../../Products';
import { appContext } from '../Context/Context'
const Cards = () => {
  const {busket,setBusket}=useContext(appContext)
  const addItem=(res)=>{
    if(busket.includes(res)){
      return res.quantity +=1
    }
    return setBusket([...busket,res])
  }
  return (
    <div className='single-card'>
        {
            Products.map((data)=>{
              const {id,name,price,image}=data;
               return (
                  <div key={id} className='card'>
                        <div className="image-card">
                            <img src={image} alt="product-logo" />
                        </div>
                        <div className="product-details">
                            <h4>{name}</h4>
                            <p>Rs.{price}/-</p>
                            <button onClick={()=>{addItem(data)}}>Add to cart</button>
                        </div>
                  </div>
               )
            })
        }
    </div>
  )
}

export default Cards