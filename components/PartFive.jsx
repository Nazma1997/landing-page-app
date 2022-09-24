import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import img from '../images/pic-3.png'


export default function Five(){
  return(
    <div className="lg:flex  justify-around bg-slate-50 mt-20 pt-10 pb-10 ml-10">
      <div>
         <Image src={img} alt="Picture of the author" width={800} height={1000} className='rounded-3xl'/>
      </div>


    
      <div className='mt-10 ml-20'>
         <FontAwesomeIcon icon={faQuestion} className='mx-5 mt-10 font-bold rounded-3xl	text-3xl text-red-400	p-5 bg-red-100'/>
         <h1 className='text-bold text-5xl text-gray-500 mt-5 mb-10'>Have Any Question?</h1>
         <p className='text-3xl text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-gray-500 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-red-400 mb-4'>How can I install this app?</p>
         <p className='text-3xl text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo facere poss.</p>
         <p className='text-3xl text-gray-500 mb-10'>Lorem ipsum dolor sit amet.</p>
         <p className='text-3xl text-red-400 mb-10'>What is the main features of this app?</p>
         <p className='text-3xl text-red-400 mb-4'>Is there any video sessions?</p>
      </div>

    </div>
  )
}