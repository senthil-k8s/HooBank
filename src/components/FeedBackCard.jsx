
import { quotes } from '../assets'

const FeedBackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[42px] h-[42px]'/>
      <p className="font-poppins font-normal text-[18px] text-white my-10" alt="content">{content}</p>
      <div className='flex flex-row' alt="founder">
        <img src={img} alt="avatar" className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white" alt="name">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-dimWhite" alt="title">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard