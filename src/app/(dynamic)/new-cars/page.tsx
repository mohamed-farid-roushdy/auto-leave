// "use client"
import React, { useState, useEffect } from 'react';
import styleNewCar from "./new-cars.module.css"
import Image from "next/image";
import { Link } from 'react-router-dom';


async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  
 
  if (!res.ok) {
   
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const  newCars = async () => {

  const data = await getData()
  const products = data.products
  console.log(products)

  return (
  
    <div className={styleNewCar.mainContainer}>
      <div>new cars</div>

    
    </div>
  )
}

export default newCars