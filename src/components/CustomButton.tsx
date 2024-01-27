"use client"
import Image from 'next/image';

import { CustomButtonProps,CustomMobileConfirmProps } from '../../types';

const CustomButton = ({title,containerStyles,handleClick,btnType}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`btn ${containerStyles}`}   
            onClick={handleClick}>

            <span className="spn">
                {title}
            </span>
        </button>
    )
}



const CustomMobileConfirm = ({title, containerStylesConfirm,handleClick,inputType}: CustomMobileConfirmProps)=>{
    return(
        <input
        disabled={false}
        type={inputType || "code"}
        className={`input ${ containerStylesConfirm}`}
        onClick={handleClick}
        >
           <span className="spn">
                {title}
            </span>
        </input>
    )

}

export {CustomButton ,
     CustomMobileConfirm} 