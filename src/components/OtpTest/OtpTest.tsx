"use client"
import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber,onAuthStateChanged,onIdTokenChanged  } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { sign } from 'crypto';
import styleOtpTest from "./OtpTest.module.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, TextField } from "@mui/material"
import { auth } from '../../app/firebaseFile/firebaseConfig';
import { Link } from 'react-router-dom';

const OtpTest = () => {
    const [phone,setPhone]= useState("");
    const [user,setUser]  = useState(null);
    const [otp,setOtp]    = useState("")
    const [display,setDisplay] = useState(true)

    // enter phone number to import otp
    const sendOtp = async ()=>{
        try{
            const recaptcha    = new RecaptchaVerifier(auth,"recaptcha",{});
            const confirmation:any = await signInWithPhoneNumber(auth,phone,recaptcha);
               setUser(confirmation);
            console.log(confirmation); 

        } catch(err){
            console.error(err)
        }
    }
    //sent otp to firebase and confirm otp 
    const VerifyOtp = async () =>{
        try{
            const data = await user.confirm(otp);
            console.log(data)
            
            
       
        } catch (err){
            console.error(err)

        }
    }
   
    
    return (
        <div className={styleOtpTest.container}>
            <div className={styleOtpTest.phoneContent}>
                <PhoneInput
                    country={'eg'}
                    value={phone }
                    onChange={(phone)=> setPhone("+" + phone) }
                />
                <Button onClick={sendOtp} className={styleOtpTest.btn} sx={{ marginTop: "10px" }} variant="contained">Send OTP</Button>
                <div id="recaptcha" className={styleOtpTest.recaptcha} ></div>
                <br />

               <div>   
                {display?
                 <TextField onChange={ (e)=> setOtp(e.target.value)} 
                 className={styleOtpTest.inputOtp} 
                 sx={{ marginTop: "15px", width: "300px" }} 
                 size='small'
                 variant="outlined" label="Enter OTP" />
                 :null}
                <br />
                </div>
                <Button onClick={VerifyOtp} sx={{ marginTop: "10px" }} variant="contained" color='success'>Verify</Button>

            </div>

         
        </div>
    )
}

export default OtpTest