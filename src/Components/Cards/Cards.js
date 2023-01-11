import React,{useState} from 'react';
import Card from './Card';
import './Cards.css';
import { Products } from './../../Products';

const Cards = () => {
  const [ProductDetails]=useState(Products);
  return (
    <div className='single-card'>
        {
            ProductDetails.map((data)=>{
               return  <Card data={data} />
            })
        }
    </div>
  )
}

export default Cards