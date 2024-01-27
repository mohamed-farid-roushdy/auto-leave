
"use client"
import React, { useState } from 'react'

import {CustomButton} from "../CustomButton"
import styleResetPassWordRequest from "./ResetPassWordRequest.module.css"
import { ConfermCode } from '..'
import OTPInput from 'react-otp-input';

const ResetPassWordRequest = ({open,onClose}:any) => {
  if(!open) return null;
 

  



  return (
    <div className={styleResetPassWordRequest.main}> 

    <div className={styleResetPassWordRequest.dataInput}>
    <h2> التأكد من رقم الهاتف      </h2>
    <h4>   ادخل رقم هاتفك الجوال  المكون من 11 رقم </h4>

    <div className={styleResetPassWordRequest.rowInput}>
        <div className={styleResetPassWordRequest.logoLock}> * </div>
        <input className={styleResetPassWordRequest.input}/>
    </div>

    <button className={styleResetPassWordRequest.btn} onClick={onClose}> اعادة تعيين كلمة السر الخاصة بي    </button>


    </div>

    <div className={styleResetPassWordRequest.imageLogo}>
    <h4> image or icon </h4>
    
    </div>
    </div>
  )
}

export default ResetPassWordRequest