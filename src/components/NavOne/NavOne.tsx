
import Link from "next/link";
import StyleNavOne from "./NavOne.module.css";
import { links } from "./data"
import Image from "next/image";
import icon from "../../../public/model-icon.png"


const NavOne = () => {




  return (
    <div className={StyleNavOne.container}>


      <div className={StyleNavOne.links}>
        {
          links.map(link =>

            
              <Link key={link.id} href={link.url} className={StyleNavOne.link} >
                <Image src={link.img} width={50} height={50} alt="logo" className={StyleNavOne.icon} />
                {link.title}
              </Link>
            
          )



        }



      </div>
      {/* <Link href="/" className={StyleNavOne.logo}>autoleave اتوليف</Link> */}
    </div>
  )
}

export default NavOne