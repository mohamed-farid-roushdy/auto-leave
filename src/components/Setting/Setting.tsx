"use client"
import React, { useRef } from 'react'
import StyleSetting from "./Setting.module.css";
import Link from "next/link";


const Setting = () => {
    const data:any=useRef();

const handleClick =()=>{
    console.log(data.current.value,"name value");
    localStorage.setItem("nameVlue",data.current.value);
}

console.log(localStorage.getItem("nameVlue"),"")

  return (
    <div className={StyleSetting.main}> 

    <div className={StyleSetting.dataInput}>
  
    <h4 className={StyleSetting.title}>  الاسم بالكامل  </h4>

    <div className={StyleSetting.rowInput}>
        
       
        <input className={StyleSetting.input}  /> 
        <h4 className={StyleSetting.title}> الهاتف </h4>
        <input className={StyleSetting.input}  ref={data}/>
    </div>

    

    <div>
        <button className={StyleSetting.saveBtn} onClick={handleClick}> حفظ </button>
        <button className={StyleSetting.saveBtn}> الغاء </button>
    </div>

    <h4 className={StyleSetting.desc}> اضغط على الزر أدناه لتتمكن من تغيير كلمة السر. لأسباب أمنية, سوف تتلقى رسالة تأكيد بالبريد الإلكتروني تحتوي على كود يسمح لك بإكمال تغيير كلمة السر.  </h4>



     <Link href="/reset-page">   <button className={StyleSetting.btn} > إعادة تعيين كلمة السر الخاصة بي </button>  </Link>
   
   
    

    </div>

    <div className={StyleSetting.imageLogo}>
    <h4> image or icon </h4>
    
    </div>
    </div>
  )
}

export default Setting