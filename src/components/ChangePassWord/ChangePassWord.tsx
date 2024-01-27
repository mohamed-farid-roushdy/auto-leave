
import StyleChangePassWord from "./ChangePassWord.module.css"


const ChangePassWord = ({open,onClose}:any) => {
    if(!open) return null;

  return (
    <div className={StyleChangePassWord.main}> 

    <div className={StyleChangePassWord.dataInput}>
    <h2> إعادة تعيين كلمة السر الخاصة بي </h2>
    <h4>  لقد تم تأكيد رقم الهاتف  الخاص بك يمكنك الآن تغيير كلمة السر     .  </h4>

    <div className={StyleChangePassWord.rowInput}>
        <div className={StyleChangePassWord.logoLock}> * </div>
        <input className={StyleChangePassWord.input}/>
    </div>

    <div className={StyleChangePassWord.rowInput}>
        <div className={StyleChangePassWord.logoLock}> * </div>
        <input className={StyleChangePassWord.input}/>
    </div>
    <button className={StyleChangePassWord.btn}  onClick={onClose}> إعادة تعيين كلمة السر الخاصة بي </button>
   
    

    </div>

    <div className={StyleChangePassWord.imageLogo}>
    <h4> image or icon </h4>
    
    </div>
    </div>
  )
}

export default ChangePassWord