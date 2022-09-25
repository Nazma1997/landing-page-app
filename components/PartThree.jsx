import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faMusic,faCamera,faArrowPointer} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import img from '../images/pic-2.png'


export default function Three(){
  return(
    <div className="lg:flex  justify-evenly bg-slate-50 mt-20 pt-10 pb-10">
        <div className=' mt-10 lg:mx-10 md:mx-5'>
        <Image src={img} alt="Picture of the author" width={800} height={1000} className='rounded-3xl'/>
        </div>
           


      <div className='mt-40'>
       <div className='  p-10 mt-20 ml-10'>
            <FontAwesomeIcon icon={faHeart} className=' font-bold 	text-3xl text-red-500 m-4 '/>
            <FontAwesomeIcon icon={faMusic} className=' font-bold 	text-3xl text-red-500	 m-5'/>
            <FontAwesomeIcon icon={faCamera} className=' font-bold 	text-3xl text-red-500	m-5'/>
            <FontAwesomeIcon icon={faArrowPointer} className=' font-bold 	text-4xl text-red-500 m-5 '/>
                
        </div>
            
            <div className='m-5 ml-10 md:ml-10'>
                <h1 className='font-bold text-5xl text-gray-600 mb-5'>Download Our App and Enjoy!</h1>
               <ul class="list-disc ml-10 mt-10 mb-10 ">
                <li className='m-5 text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat.</li>
                <li className='m-5 text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, possimus.</li>
                <li className='m-5 text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, excepturi!</li>
               </ul>
            </div>

            <button className='bg-violet-600 p-5 text-white text-2xl rounded-3xl ml-10 '>Learn More</button>
      </div>
  </div>

       
    
  )
}