import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import img from '../images/pic-3.png'


export default function Five(){
  return(
    <div className="lg:flex  justify-around bg-slate-50 mt-20 pt-10 pb-10  ">
      <div className='md:mx-10 sm:mx-3'>
         <Image src={img} alt="Picture of the author" width={800} height={1000} className='rounded-3xl'/>
      </div>


    
      <div className='mt-10 lg:ml-20 md:mx-10'>
         <FontAwesomeIcon icon={faQuestion} className='mx-5 mt-10 font-bold rounded-3xl	text-3xl text-red-400	p-5 bg-red-100 '/>
         <h1 className='text-bold text-5xl text-gray-500 mt-5 mb-10 mx-5'>Have Any Question?</h1>
         <p className='text-3xl text-gray-500 mb-4 mx-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-gray-500 mb-10 mx-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-red-400 mb-4 mx-5 '>How can I install this app?</p>
         <p className='text-3xl text-gray-500 mx-5 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-gray-500 mb-10 mx-5'>Lorem ipsum dolor sit amet.</p>
         <p className='text-3xl text-red-400 mb-10 mx-5'>What is the main features of this app?</p>
         <p className='text-3xl text-red-400 mb-4 mx-5'>Is there any video sessions?</p>
      </div>

    </div>
  )
}