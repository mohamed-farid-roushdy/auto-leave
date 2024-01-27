"use client"
import React, { useState } from 'react'

import Link from "next/link";
import StyleNavTwo from "./NavTwo.module.css";
import {CustomButton} from "../CustomButton"
import SignInPopUp from "@/components/SignInPopUp/SignInPopUp";

const NaveTwo = () => {

  const [openSignIn,setOpenSignIn] = useState(false); // used to track

 const handleScroll = () => {
  
  setOpenSignIn(true)
  
 }
  return (
    

     
    <div className={StyleNavTwo.main}>
          <div className={StyleNavTwo.container}>
           <button></button>
            <CustomButton
            title="دخول"
            btnType={"button"}
            containerStyles={`${StyleNavTwo.btn}`}
            handleClick={handleScroll}
           />

            {/* show pop up for sign in*/}
    
            <SignInPopUp  open={openSignIn} onClose={()=> setOpenSignIn(false)}/>

            <Link href="/" className={StyleNavTwo.logo}>autoleave اتوليف</Link>

          </div>
    </div>



  
  )
}

export default NaveTwo