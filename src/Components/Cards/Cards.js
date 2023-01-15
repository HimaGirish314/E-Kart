import React,{useContext,useState} from 'react';
import './Cards.css';
import { Products } from './../../Products';
import { appContext } from '../Context/Context'
const Cards = () => {
  const {busket,setBusket,searchTerm}=useContext(appContext)
  const[newProducts,setNewProducts]=useState(Products)
  const addItem=(res)=>{
    if(busket.includes(res)){
      res.quantity +=1
      return setBusket([...busket])
    }
    return setBusket([...busket,res])
  }
  const newArray=(newArray)=>{
        let myName=newArray.sort((a,b)=>{
        if(a.price>b.price){return 1}
        else {return -1}
      })
      return setNewProducts([...myName])
  }
  const newArray2=(newArray)=>{
    let myName=newArray.sort((a,b)=>{
        if(a.price>b.price){return -1}
        else {return 1}
      })
      return setNewProducts([...myName])
  }
  return (
    <div className='single-card'>
      <div className="sortButtons">
            <span onClick={()=>{newArray(newProducts)}}>Price--low-High</span>
            <span onClick={()=>{newArray2(newProducts)}}>Price--High-Low</span>
      </div>
      <div className='allProducts'>
      { 
            newProducts.filter((data)=>data.name.toLowerCase().includes(searchTerm)).map((data)=>{
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
    </div>
  )
}

export default Cards;