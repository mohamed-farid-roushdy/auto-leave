import styleCardUsedCar from "./CardUsedLastCars.module.css";
import Image from "next/image";
import elantra from "../../../public/elentra.jpeg"

const CardUsedLastCars = () => {
  return (
    <div className={styleCardUsedCar.container}>

<div className={styleCardUsedCar.titles_category}>
            <h3>هيونداي</h3>
            <h3>الينترا</h3>
            <h3>2015</h3>
        </div>

        <div className={styleCardUsedCar.border}>

        <div className={styleCardUsedCar.img}>
            <Image src={elantra} alt="" width={220} className={styleCardUsedCar.image} />
        </div>

<div className={styleCardUsedCar.content}>
        <div className={styleCardUsedCar.desc}> <p> استعمال جيد لظروف السفر  استعمال جيد    </p></div>

       

        <div className={styleCardUsedCar.price}>
        <h5>السعر</h5>
            <h2> 450.000 <span>جنيه</span> </h2>
        </div>
        <div className={styleCardUsedCar.other}>
            <h4>الحيزة،الدقي</h4>
        </div>
        </div>
        
        </div>
        
        </div>
  )
}

export default CardUsedLastCars