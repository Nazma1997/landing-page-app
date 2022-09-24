import Image from 'next/image';
// import logo from '../images/logo.png';
import picture1 from '../images/pic-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faPlay} from "@fortawesome/free-solid-svg-icons"






export default function One(){
  return(
   <div className=' pb-20 bg-slate-50 '>
      <div className=' flex justify-around  p-5 bg-violet-800'>
        <h1 className='font-medium text-3xl text-white	'>LOGO</h1>
        <h1 className='font-medium text-3xl text-white	'>Features</h1>
        
        <h1 className='font-medium text-3xl text-white	'>Contract</h1>
        <FontAwesomeIcon icon={faSearch} className='mx-10 font-bold	text-3xl bg-violet-100 text-violet-500 p-5 rounded-3xl'/> 
            
      </div>
      <div className=' lg:flex justify-evenly pt-10 m-10 mx-32 mt-40'>
        <div className='mt-44 mr-52'>
            <h1 className='font-bold text-7xl text-violet-800 mb-5'>Download Our App and Enjoy!</h1>
            <p className='pb-10 text-3xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum praesentium incidunt magni dolor velit, veniam numquam dolorum ratione distinctio?</p>
            
            <button className='bg-violet-600 p-5 text-white text-2xl rounded-3xl '>Download App</button>
            
            <FontAwesomeIcon icon={faPlay} className='mx-10 font-bold	text-3xl text-violet-600'/> <span className='text-2xl font-medium	text-gray-500'>Play Now</span>
            
            

        </div>
        <div className=' mt-10'>
        <Image src={picture1} alt="Picture of the author" width={1000} height={1300} className='rounded-3xl'/>
        </div>
        
      </div> 
   </div>
  )
}