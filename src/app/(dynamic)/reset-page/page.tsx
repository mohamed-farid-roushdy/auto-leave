"use client"

import React, { useState } from 'react'

import styleResetPage from "./reset-page.module.css"
import { ResetPassWordRequest ,ConfermCode,ChangePassWord,Letter} from '@/components'

const page = () => {

   const [showRequest,setShowRequest]= useState(true);
  const [showConfirm,setShowConfirm]= useState(false);
  const [showChange,setShowChange]=useState(false);
  const [showLetter,setShowLetter]= useState(false)
  
 


  return (
    <div className={styleResetPage.main}>
        <ResetPassWordRequest open={showRequest} onClose={()=>
          <>
          {setShowRequest(false)} 
          {setShowConfirm(true)}
          </>
          
         } />
        <ConfermCode open={showConfirm} onClose={()=>
        <>
         {setShowConfirm(false)}
         {setShowChange(true)}
        
        </>}/>



        <ChangePassWord open={showChange} onClose={()=><>
        {setShowChange(false)}
        {setShowLetter(true)}
        
        
        </>}/>

        <Letter open={showLetter}/>
       
    </div>
  )
}

export default page