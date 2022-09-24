import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompassDrafting, faPenToSquare, faShield} from "@fortawesome/free-solid-svg-icons"


export default function Two(){
  return(
   
    <div className="lg:flex  justify-evenly bg-slate-100 mt-20 pt-10 pb-10">
        <div className='text-center p-20  rounded-2xl m-10 bg-white shadow-white-300	'>
          <FontAwesomeIcon icon={faCompassDrafting} className='mx-10 font-bold rounded-full	text-3xl text-red-400	p-5 bg-red-100'/>
          <h2 className='font-semibold text-2xl mt-5 text-gray-500'>Awesome Design</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur Lorem </p>

        </div>





        <div className='text-center p-20 rounded-2xl m-10   bg-white shadow-white-300'>
          <FontAwesomeIcon icon={faPenToSquare} className='mx-10 font-bold rounded-full	text-3xl0 text-red-400	p-5 bg-red-100'/>
          <h2 className='font-semibold text-2xl mt-5 text-gray-500'>Easy to Edit</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur Lorem</p>

        </div>





        <div className='text-center p-20 rounded-2xl m-10  bg-white shadow-white-300'>

          <FontAwesomeIcon icon={faShield} className='mx-10 font-bold rounded-full	text-3xl text-red-400	p-5 bg-red-100'/>
          <h2 className='font-semibold text-2xl mt-5 text-gray-500'>Fully Secured</h2>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur Lorem</p>

        </div>

    </div>
  )
}