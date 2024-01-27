import styleCardUsedCarOneItem from "./CardUsedCarOneItem.module.css"
import Image from "next/image"
import petrol from "../../../public/tire.svg"
import carImage from "../../../public/elentra.jpeg"

const CardUsedCarOneItem = () => {
  return (
    <>
     <div className={styleCardUsedCarOneItem.card}>
        <div className={styleCardUsedCarOneItem.img}>
          <Image src={carImage} alt=""   className={styleCardUsedCarOneItem.img}/>
        </div>
        <div className={styleCardUsedCarOneItem.location}>
        <Image src={petrol} alt="" width={10} height={10}/>
          <h5>القاهرة ، مصرالجديدة</h5>
        </div>
        <div className={styleCardUsedCarOneItem.category}>
          <h4>هيونداي توسان 2021</h4>
        </div>
        <div className={styleCardUsedCarOneItem.details}>
          <p>     لدواعي السفر سيارة فابريكا استعمال نظيف </p>
        </div>
        <div className={styleCardUsedCarOneItem.price}>
        <p className={styleCardUsedCarOneItem.mount}>1,400,000</p>
          <p className={styleCardUsedCarOneItem.pound}> جنيه </p>
        </div>
        <div className={styleCardUsedCarOneItem.features_tag}>
          <div className={styleCardUsedCarOneItem.km}>
            <Image src={petrol} alt="" width={10} height={10}/>
            <p>34,000</p>
            <p> كم </p>
          </div>
          <div className={styleCardUsedCarOneItem.km}>
            <Image src={petrol} alt="" width={10} height={10}/>
            <p> اتوماتك </p> 
          </div>
          <div className={styleCardUsedCarOneItem.km}>
            <Image src={petrol} alt="" width={10} height={10}/>
            <p> cc </p>
            <p>1600</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default CardUsedCarOneItem