import StyleLetter from "./Letter.module.css"
import Link from "next/link";


const Letter = ({open,onClose}:any) => {
    if(!open) return null;
  return (
    <div className={StyleLetter.main}> 

        <h4 className={StyleLetter.subject}>  
       

        لقد تم إعادة تعيين كلمة السر الخاصة بك بنجاح. تم تسجيل دخولك على موقعنا الأن. في المستقبل, تأكد من أنك تسجل الدخول بكلمة السر الجديدة
         </h4>

       
        <Link   href="/">  <h5 className={StyleLetter.contenue}> استمر </h5></Link>

    </div>
  )
}

export default Letter