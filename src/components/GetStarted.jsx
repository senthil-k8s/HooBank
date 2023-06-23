import styles from "../style"
import { arrowUp } from "../assets"
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} h-[140px] w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer` }>
      <div className={`${styles.flexCenter} flex-col h-[100%] w-[100%] bg-primary rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2"> 
            <span className="text-gradient"> Get </span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
        </div>
        <div className={` ${styles.flexStart} flex-row`}>
          <p className="font-poppins text-[18px] mr-2"> 
            <span className="text-gradient"> Started </span>
          </p>
        </div>
      </div>
    </div>

    

  )
}

export default GetStarted