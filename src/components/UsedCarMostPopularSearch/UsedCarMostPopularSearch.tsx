import styleUsedCarMostPopularSearch from "./UsedCarMostPopularSearch.module.css"
import Image from "next/image"
import top from "../../../public/hero.png"
const UsedCarMostPopularSearch = () => {
  return (
    <div>


        <div className={styleUsedCarMostPopularSearch.container}>

            <div className={styleUsedCarMostPopularSearch.key}>10</div>

            <div className={styleUsedCarMostPopularSearch.details}>
                <p className={styleUsedCarMostPopularSearch.bold}> تويوتا فورشينر   2015 </p>
                <p> 1600 سي سي </p>
                <p className={styleUsedCarMostPopularSearch.bold}> اتوماتيك </p>
                <p> نوع الوقود بنزين </p>

                
                
                
                </div>


            <div className={styleUsedCarMostPopularSearch.img}>
            <Image src={top} alt="" width={100}/>
            
            </div>

        </div>




    </div>
  )
}

export default UsedCarMostPopularSearch