import { InputHTMLAttributes, ReactNode } from "react";
import StyleConfermCode from "./ConfermCode.module.css"
import OTPInput, { AllowedInputTypes } from "react-otp-input";
const ConfermCode = ({open,onClose}:any) => {

    if(!open) return null;
  return (
    <div className={StyleConfermCode.main}> 

    <div className={StyleConfermCode.dataInput}>
    <h2>  تأكيد رقم الهاتف </h2>
    <h4> لقد قمنا بإرسال كود التفعيل المكون من 6 أرقام لهاتفك </h4>

    <div className={StyleConfermCode.rowInput}>
        <label className={StyleConfermCode.logoLock}> * </label>
        <input className={StyleConfermCode.input} />
       
       
    </div>

    <button className={StyleConfermCode.btn} onClick={onClose}>  تأكيد    </button>
    </div>

    <div className={StyleConfermCode.imageLogo}>
    <h4> image or icon </h4>
    
    </div>
    </div>
  )
}

export default ConfermCode