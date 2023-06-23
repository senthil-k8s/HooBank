import { clients } from "../constants";
import styles,{layout} from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px] m-5`} >
          <img 
            src={client.logo} 
            alt="client_logo" 
            className="sm:w-[192px] w-[100px]"
            />
        </div>
      ))}
    </div>
</section>
)

export default Clients