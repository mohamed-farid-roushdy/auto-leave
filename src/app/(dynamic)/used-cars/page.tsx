import use_dcars from "./used-cars.module.css"
import Link from "next/link";

import { CardUsedCarOneItem, ConsoleSearchCarsUsed } from "@/components"

const usedCars = () => {
  return (
    <div className={use_dcars.main}>
    <ConsoleSearchCarsUsed/>
    <div className={use_dcars.cards}>
    
      <div className={use_dcars.titles_tags}>
       
      <Link href="/used-cars-open" ><h4>سيارات هيونداي للبيع </h4>  </Link>
      
      <div className={use_dcars.tags}>
        <p> هيونداي <span>x</span>   </p>
        <p> الينترا <span>x</span> </p>
        <p> 2015 <span>x</span> </p>
      </div>
      </div>

      <div className={use_dcars.wrapper_cards}>

  

       
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
        <CardUsedCarOneItem/>
      </div>
    </div>
    </div>
  )
}

export default usedCars