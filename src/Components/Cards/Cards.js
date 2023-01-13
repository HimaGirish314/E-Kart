import React,{useContext,useState} from 'react';
import './Cards.css';
import { Products } from './../../Products';
import { appContext } from '../Context/Context'
const Cards = () => {
  const {busket,setBusket}=useContext(appContext)
  const[newProducts,setNewProducts]=useState(Products)
  const addItem=(res)=>{
    if(busket.includes(res)){
      res.quantity +=1
      return setBusket([...busket])
    }
    return setBusket([...busket,res])
  }
  const newArray=(newArray)=>{
        newArray.sort((a,b)=>{
        if(a.price>b.price){return 1}
        else {return -1}
      })
      return setNewProducts([...newArray])
  }
  const newArray2=(newArray)=>{
        newArray.sort((a,b)=>{
        if(a.price>b.price){return -1}
        else {return 1}
      })
      return setNewProducts([...newArray])
  }
    // let ascenArray=newProducts.sort((a,b)=>{
    //   if(a.price>b.price){return 1}
    //   else {return -1}
    // })

  return (
    <div className='single-card'>
      <div className="sortButtons">
            <span onClick={()=>{newArray(newProducts)}}>Price--low-High</span>
            <span onClick={()=>{newArray2(newProducts)}}>Price--High-Low</span>
      </div>
      <div className='allProducts'>
      { 
            newProducts.map((data)=>{
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
      <div className="filterSection">        
            {/* <select name="sort" id="sort">
              <option value="sort">Sort</option>
              <option value="Low-High" onSelect={()=>{newArray(newProducts)}}>Low-High</option>  
              <option value="Low-High" onSelect={()=>{newArray2(newProducts)}}>High-Low</option>  
            </select>     */}
      </div>
    </div>
  )
}

export default Cards;