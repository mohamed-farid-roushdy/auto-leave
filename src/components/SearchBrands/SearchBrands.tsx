"use client"
import React, { useState, useEffect, useRef } from 'react'
import styleSearchBrands from "./SearchBrands.module.css"
import Image from "next/image";

const SearchBrands = ({ brandsCar, placeholder, onChange, selectedkey, open, setOpen }: any) => {
    const [isFocus, setIsFocus] = useState(false);
    const ref = useRef(null);

    // 👇️ check if an element is focused on mount
    useEffect(() => {
        if (document.activeElement === ref.current ) {
            console.log('element has focus');
        } else {
            console.log('element does NOT have focus');
        }
    }, []);

    useEffect(() => {
        console.log('isFocused: ', isFocus);
    }, [isFocus]);

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e: any) => {
        setInputValue(e.target.value)
    };

    // console.log(inputValue)

    const onItemSelected = (option: any) => {
        
        onChange !== undefined && onChange(option.key);
        onChange !== undefined && setInputValue(option.brand);
         
        setIsFocus(false)
        setOpen(false)
      
    };

    const clearDropdown = () => {
        setInputValue("");
        onChange("");
    };

    const onInputClick = () => {
        setOpen((prevValue: any) => !prevValue)

    };





    return (
        <div className={styleSearchBrands.container}>

            {/*================ input div ===============*/}
            <div className={`${styleSearchBrands.input_div}   `}  >
                {/* input text    onInputChange  */}
                <input type='text' value={inputValue} placeholder={`اختر نوع سيارة`} onChange={onInputChange} onClick={onInputClick} ref={ref} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
                {/* clear input */}
                {selectedkey || inputValue ? <div onClick={clearDropdown} className={styleSearchBrands.input_clear_container}>x</div> : null}
            </div>



            {/* Appears on click */}
            <div className={`${styleSearchBrands.dropdown}  ${ open ? styleSearchBrands.visible : styleSearchBrands.hidden}  `  }    >

                {/* maping */}
                {brandsCar.filter((opt: any) => {

                    return inputValue.toLocaleLowerCase().replace(/\s+/g, "") === "" ? opt : opt.brand.
                        toLocaleLowerCase().replace(/\s+/g, "").includes(inputValue)
                })
                    .map((opt: any) => {
                        return (
                            <div className={styleSearchBrands.container_result}>
                                <div key={opt.key} onClick={() => onItemSelected(opt)} className={styleSearchBrands.option} >

                                    <div className={styleSearchBrands.logo}>
                                        <Image src={opt.img} alt=""></Image>
                                    </div>
                                    {opt.brand}
                                    <div className={styleSearchBrands.qty_result}><p>{opt.qtyCar}</p></div>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}

export default SearchBrands