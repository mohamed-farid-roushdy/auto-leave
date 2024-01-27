"use client"
import React, { useState } from 'react'
import { brandsCar } from '../../constants'
import Image from 'next/image'
import styles from './page.module.css'
import { SearchBrands, CardUsedLastCars,UsedCarMostPopularSearch } from '@/components'
import {CustomButton} from '@/components/CustomButton'
import mercedes from "../../public/mercedes-amg-gt-r-car.png"
import OtpTest from '../components/OtpTest/OtpTest' 

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);



  
  return (
    <main className={styles.container}>

      <div className={styles.hero}>
        <div className={styles.hero_img}>
          <Image src={mercedes} alt='mercsdes' />
        </div>

        <div className={styles.hero_tile}>
          <h1 className={styles.title1}>ابدأ بالبحث!</h1>
          <h1 className={styles.title2}>ابحث عن سيارة مستعملة</h1>
          <p className={styles.p}>تراجع في معدلات استيراد السيارات والمركبات في النصف الأول من 2023 مقارنة بالنصف الأول من 2022 مع ارتفاع فقط لقيمة استيراد الأتوبيسات. </p>
        </div>
      </div>

      <div className={styles.search_box}>
        <div className={styles.border_search}>
          <CustomButton
            title='ابحث' containerStyles={styles.btnsearch} />

          <CustomButton
            title='السعر' containerStyles={`${styles.btn1} ${styles.btn_price}`} />

          <CustomButton
            title='السنة' containerStyles={`${styles.btn1} ${styles.btn_year}`} />

          <CustomButton
            title='الموديل' containerStyles={`${styles.btn1} ${styles.btn_model}`} />
          <CustomButton
            title='الماركة' containerStyles={`${styles.btn1} ${styles.btn_brand}`} />
        </div>
      </div>


    


        {/* <OtpTest/> */}



      <div className={styles.head}>
        {/* <p>selected option is: {selectedOption}</p> */}
      </div>
    
      <div className={styles.last_update}>
        <div className={styles.head_title}>
        <h3 className={styles.last_title}>اضيف حديثا</h3>
        <h3 className={styles.last_see}>  شاهد كل السيارات المستعملة للبيع </h3>
        </div>
        <div className={styles.cards_last_update}>

        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        <CardUsedLastCars/>
        </div>
      </div>

    


      <div className={styles.most_popular_search}>

        <div className={styles.most_title}>
      <h3 className={styles.model_title}>الموديلات المستعملة الأكثر بحثا  </h3>
      <h3 className={styles.last_see}> خلال آخر 30 يوم </h3>



      </div>

        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
        <UsedCarMostPopularSearch/>
      </div>

    </main>
  )
}
