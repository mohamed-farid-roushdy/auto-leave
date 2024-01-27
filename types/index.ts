import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    containerStyles?:string,
    handleClick?: MouseEventHandler <HTMLButtonElement>,
    btnType?: "button" | "submit";
}

export interface CustomMobileConfirmProps{
    title:string,
    subTitle?:string,
    containerStylesConfirm?:string,
    handleClick?:MouseEventHandler <HTMLInputElement>,
   inputType?: "input" | "code";

}


// export interface SearchManufacturerProps {
//     manufacturer: string,
//     styleSearchManufacturer?: string,
//     setManufacturer: (manufacturer: string) => void;
// }