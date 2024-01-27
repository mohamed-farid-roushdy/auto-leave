import StyleSettingPage from "./settingPage.module.css"
import { Setting } from '@/components'

const page = () => {
  return (
    <div className={StyleSettingPage.main}> 
        <h3 className={StyleSettingPage.title}> الإعدادات </h3>

        <Setting/>


    </div>
  )
}

export default page