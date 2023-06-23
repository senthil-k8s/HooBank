import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card 
          <br className="sm:block hidden"/>
          deal in few easy steps
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments 
          and grow your business anywhere on the planet.
        </p>
        
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="h-[100%] w-[100%]" />
      </div>
    </section>
  )


export default CardDeal