"use client"
import stylePopUpSign from "./SignInPopUp.module.css";
import Link from "next/link";


const SignInPopUp = ({open,onClose}:any) => {

    if(!open) return null;

    


  return (
    <div className={stylePopUpSign.overlay}>
    <div className={stylePopUpSign.mainPop}> 

    <div>
    <p className={stylePopUpSign.closebtn} onClick={onClose}>x</p>
    </div>
    <div className={stylePopUpSign.inputDiv}>
        <h4> دخول / تسجيل </h4>
    </div>
    <div className={stylePopUpSign.inputDiv}>
        <h4> رقم الموبايل  </h4>
       <input className={stylePopUpSign.inputBtn}/>
    </div>

    <div className={stylePopUpSign.inputDiv}>
        <h4> كلمة السر  </h4>
       <input className={stylePopUpSign.inputBtn}/>
       <Link href="/reset-page"><h6 className={stylePopUpSign.h6} onClick={onClose}> اعادة تعيين كلمة السر </h6></Link>
       

    </div>

    <div className={stylePopUpSign.inputDiv}>
        <button className={stylePopUpSign.loginBtn} > دخول </button>
    </div>

    <div className={stylePopUpSign.createDiv}>
        <h4>  ليس لدي حساب  </h4>
        <Link href="/reset-page">  <button className={stylePopUpSign.createBtn} onClick={onClose}> انشاء حساب جديد </button></Link>
       

    </div>



    </div>


    </div>
  )
}

export default SignInPopUp