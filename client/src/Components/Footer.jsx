import React, { useContext } from 'react'
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { AiFillMail } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import sdebLight from '../assets/sdebLight.png'
import sdebDark from '../assets/sdebDark.png'
import ThemeContext from '../Context/ThemeContext';

const Footer = () => {

    // const [theme, setTheme] = useState(ThemeContext)
    const { theme } = useContext(ThemeContext);

  return (
    <div className='grid grid-cols-2 h-[130px] border-t dark:border-t-white mt-5'>
        
        <div className='flex justify-center items-center text-lg text-[#121212] font-bold dark:text-white border-r dark:border-r-white'>
           
            <a href='https://www.linkedin.com/in/santiago-a-sanchez-de-bustamante-9116531a2/'
                className='text-xl text-[#121212] font-bold dark:text-white px-5 hover:text-blue-700 dark:hover:text-blue-500'> 
                <RiLinkedinBoxFill /> 
            </a>

            <a href='https://github.com/santiagosdeb'
                className='text-xl text-[#121212] font-bold dark:text-white px-5 hover:text-violet-700 dark:hover:text-violet-500'> 
                <RiGithubFill /> 
            </a>

            <a href='https://wa.me/message/4VBSTH54ZKIAD1'
                className='text-xl text-[#121212] font-bold dark:text-white px-5 hover:text-green-700 dark:hover:text-green-500'> 
                <IoLogoWhatsapp /> 
            </a>

            <a href='mailto:santiagosanchezdeb@gmail.com'
                className='text-xl text-[#121212] font-bold dark:text-white px-5 hover:text-red-700 dark:hover:text-red-500'> 
                <AiFillMail /> 
            </a>

            <a href='https://portfolio.com/santiagosdeb'
                className='text-xl text-[#121212] font-bold dark:text-white px-5 hover:text-yellow-400 dark:hover:text-yellow-300'> 
                <BsFillBriefcaseFill /> 
            </a>
        </div>
        
        <div className="flex justify-center items-center">
            {theme === 'light' ? <img src={sdebLight} width={120} height={120}/> : <img src={sdebDark} width={120} height={120} />}  
        </div>

    </div>
  )
}

export default Footer