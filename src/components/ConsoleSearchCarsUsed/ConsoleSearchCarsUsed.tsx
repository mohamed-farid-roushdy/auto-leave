"use client"
import { SearchBrands } from ".."
import React, { useState } from 'react'
import { brandsCar,locationCity } from '../../../constants'

import {CustomButton} from "../CustomButton"
import styleConsoleSearchCarsUsed from "./ConsoleSearchCarsUsed.module.css"

const ConsoleSearchCarsUsed = () => {
  // BRAND CARS INPUT 
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);
  // =============

  const [selectedCity,setSelectedCity]= useState("");
  const [openInput,setOpenInput]= useState(false);

  //=================
  return (
    <>
      <div className={styleConsoleSearchCarsUsed.consoul_search}>
        <h4>     ابحث عن سيارة للبيع </h4>

        <div className={styleConsoleSearchCarsUsed.container}>


          <div>
            {/* <input type="text" placeholder="ماركة السيارة"/> */}
            <SearchBrands
              brandsCar={brandsCar}
              onChange={(item: any) => setSelectedOption(item)}
              selectedkey={selectedOption}
              placeholder={`Search here`}
              open={open}
              setOpen={setOpen}
               />

          </div>



          <div>
            <input type="text" placeholder="موديل السيارة" />
           
          </div>

          <div>
          <input type="text" placeholder="اختر المدينة" />
          </div>

          <div>
            <input type="text" placeholder="اختر النوع" />
          </div>

          <div>
            <input type="text" placeholder="ناقل الحركة" />
          </div>

          <div>
            <input type="text" placeholder=" نوع الوقود " />
          </div>

          <div className={styleConsoleSearchCarsUsed.row}>
            <input type="text" placeholder=" السعر من" />
            <input type="text" placeholder=" السعر الى" />
          </div>

          <div className={styleConsoleSearchCarsUsed.row}>
            <input type="text" placeholder=" كم من " />
            <input type="text" placeholder=" كم الى " />
          </div>

          <div className={styleConsoleSearchCarsUsed.row}>
            <input type="text" placeholder="  سنة الصنع من " />
            <input type="text" placeholder=" سنة الصنع الى  " />
          </div>

          <div>
            <input type="text" placeholder=" اللون  " />
          </div>

          <h5> تحتوي على </h5>
          <div className={styleConsoleSearchCarsUsed.extraSearch}>
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title="صورة " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title=" فيديو   " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title=" كسر زيرو   " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title="   تاكسي  " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title="   معاقين  " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title="   تقسيط  " />
            <CustomButton containerStyles={styleConsoleSearchCarsUsed.btn} title="   تأمين  " />
          </div>




        </div>

        <CustomButton containerStyles={styleConsoleSearchCarsUsed.btnSearchClick} title="بحث" />

      </div>
    </>
  )
}

export default ConsoleSearchCarsUsed