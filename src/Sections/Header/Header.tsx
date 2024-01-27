 import StyleHeader from "./Header.module.css"
 import { NavOne,NaveTwo } from "@/components"
const Header = () => {
  return (
    <div className={StyleHeader.container}>
      <NaveTwo/>
      <NavOne/>
    </div>
  )
}

export default Header