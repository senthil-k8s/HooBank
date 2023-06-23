
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import styles from '../style'

const Footer = () => (
    <section className={`${styles.paddingY} `}>
      <div className={`${styles.flexStart} md:flex-row flex-col`}>
        <div className='flex-1 flex flex-col justify-start'>
          <img 
              src={logo} 
              alt="footerLogo" 
              className='w-[266px] h-[72px] object-contain'  
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments 
            easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10 `'>
          {footerLinks.map((footerLink) => (
            <div className="" key={footerLink.key} >
              <h4 className='font-poppins font-medium text-white text-[18px] leading-[27px] mb-4'>
                  {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] cursor-pointer hover:text-secondary 
                    ${index !== footerLink.length -1} ? mb-4 : mb-0'>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] flex justify-between items-center'>
          <p className='font-poppins font-normal text-center text-white text-[18px]'>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6 cursor-pointer">
            {socialMedia.map((link, index) => (
              <img 
                src={link.icon} 
                alt={link.id}
                key={link.id}
                className={`w-[21px] h-[21px] ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0" }`}
              />
            ))}
          </div>
      </div>
    </section>
  )


export default Footer