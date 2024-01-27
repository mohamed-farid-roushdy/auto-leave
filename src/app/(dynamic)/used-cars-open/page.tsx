import StyleUsedCarOpen from "./used-cars-open.module.css"
const page = () => {
  return (
    <div className={StyleUsedCarOpen.wapper}>
      <div className={StyleUsedCarOpen.headCtegory}>
        <h5> سيارات للبيع </h5>
        <span> / </span>
        <h5> سيارات مستعملة </h5>
        <span> / </span>
        <h5>  نيسان </h5>
        <span> / </span>
        <h5>  سينترا </h5>
        <span> / </span>
        <h5>  2021 </h5>
      </div>


      <div className={StyleUsedCarOpen.headTitles}>
        <h1> نيسان سينترا للبيع </h1>
        <h1> 690.000 جنيه </h1>
      </div>

      <div className={StyleUsedCarOpen.bodyOne}>
        <div className={StyleUsedCarOpen.galary}></div>

        <div className={StyleUsedCarOpen.basicDetails}>
          <h4>بيانات السيارة</h4>
          <div className={StyleUsedCarOpen.wapperDetails}>

            <div className={StyleUsedCarOpen.row}>
              <div className={StyleUsedCarOpen.brand}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> الماركة </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> نيسان </h5>  <h5>||</h5> <h5>Nissan</h5> </div>
              </div>

              <div className={StyleUsedCarOpen.model}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> الموديل </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> سينترا </h5>  <h5>||</h5> <h5>Sentra</h5> </div>
              </div>
            </div>


            <div className={StyleUsedCarOpen.row}>
              <div className={StyleUsedCarOpen.brand}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> السنة </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> 2021 </h5>  </div>
              </div>

              <div className={StyleUsedCarOpen.model}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> كم </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> 11400كم </h5>  </div>
              </div>
            </div>
           

            <div className={StyleUsedCarOpen.row}>
              <div className={StyleUsedCarOpen.brand}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> الطراز </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> Basic </h5>  </div>
              </div>

              <div className={StyleUsedCarOpen.model}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> هيكل السيارة </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> سيدان </h5>  </div>
              </div>
            </div>



            <div className={StyleUsedCarOpen.row}>
              <div className={StyleUsedCarOpen.brand}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> ناقل الحركة </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> اتوماتيك </h5>  </div>
              </div>

              <div className={StyleUsedCarOpen.model}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> الوقود  </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> بنزين 92 </h5>  </div>
              </div>
            </div>


            <div className={StyleUsedCarOpen.row}>
              <div className={StyleUsedCarOpen.brand}>
                <div className={StyleUsedCarOpen.brandTitle}><h5>  اللون </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> رمادي </h5>  </div>
              </div>

              <div className={StyleUsedCarOpen.model}>
                <div className={StyleUsedCarOpen.brandTitle}><h5> الموقع  </h5></div>
                <div className={StyleUsedCarOpen.Argument}> <h5> الجيزة  </h5>  </div>
              </div>
            </div>

            <div className={StyleUsedCarOpen.desc}>  <h4>  تفاصيل أخرى   </h4>

            <div> <h5> سنترا موديل 2021 الفئة الأولى فابريكة بالكامل ماشية 114 ألف كم صيانات منتظمة بحاله فوق الممتازة السياره بإسمي رخصه سنه السعر نهائي ( تم تركيب حساسات خلفيه للسياره) .السعر نهائي. </h5> </div>
            
            </div>
            <div className={StyleUsedCarOpen.clickNo}> <h5>  xxxx  اظهر الرقم  </h5></div>


          </div>

        </div>
      </div>
      <h4 className={StyleUsedCarOpen.accesoriesTitle}>  تجهيزات اضافية </h4>

      <div className={StyleUsedCarOpen.bodyTwo}>

        <div>
          <h4 > وسائل الراحة </h4>
          <div className={StyleUsedCarOpen.accesories}>
            <h5>  <span>  ✔︎  </span>  باور  </h5>
            <h5>  <span> ✔︎ </span> مرايات كهرباء  </h5>
            <h5>  <span> ✔︎ </span> ريموت كنترول  </h5>
            <h5>  <span> ✔︎ </span> فرش قماش  </h5>
            <h5>  <span> ✔︎ </span> فرش جلد  </h5>
          </div>
        </div>

        <div>
          <h4> نوافذ </h4>
          <div className={StyleUsedCarOpen.accesories}>
          <h5> <span> ✔︎ </span> نوافذ كهربائية امامية  </h5>
          <h5> <span> ✔︎ </span>  نوافذ كهربائية خلفية   </h5>

          </div>

        </div>

        <div>
        <h4> نظام الصوت </h4>
        <div className={StyleUsedCarOpen.accesories}>
        <h5> <span> ✔︎ </span> مدخل AUX </h5>
            <h5> <span> ✔︎ </span>  مدخل USB </h5>
            <h5> <span> ✔︎ </span>  راديو كاسيت </h5>
            <h5> <span> ✔︎ </span>  مشغل اسطوانات </h5>
        </div>

        </div>

        <div>
        <h4> وسائل الامان  </h4>
        <div className={StyleUsedCarOpen.accesories}>
        <h5> <span> ✔︎ </span> وسادة هوائية للركاب </h5>
            <h5> <span> ✔︎ </span>  نظام توزيع قوة الفرامل EBD </h5>
            <h5> <span> ✔︎ </span>  نظام الفرامل المانع للانغلاق-ABS </h5>
            <h5> <span> ✔︎ </span>  حساسات </h5>
            <h5> <span> ✔︎ </span> حسسات خلفيه </h5>
            <h5> <span> ✔︎ </span>  نظام إيموبليزر ضد السرقة </h5>
            <h5> <span> ✔︎ </span>  وسادة هوائية للسائق </h5>
        </div>


        </div>

        <div>
        <h4> اخرى   </h4>
        <div className={StyleUsedCarOpen.accesories}>
        <h5> <span> ✔︎ </span> إنذار </h5>
            <h5>  <span> ✔︎ </span> قفل مركزى للابواب </h5>
           
        </div>


        </div>




      </div>
      <div className={StyleUsedCarOpen.bodyThree}></div>
    </div>
  )
}

export default page