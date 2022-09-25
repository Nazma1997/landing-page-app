import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faMusic,faCamera,faArrowPointer,faBell,faHeadSideCough,faThumbsUp, faArrowCircleLeft,faArrowCircleRight} from "@fortawesome/free-solid-svg-icons"


export default function Four(){
  return(
    <div className="lg:flex  justify-evenly bg-slate-50 mt-20 pt-10 pb-10">
      <div>
         <div className=' mt-20 ml-10'>
            <FontAwesomeIcon icon={faHeart} className=' font-bold 	text-3xl text-red-500 m-4 '/>
            <FontAwesomeIcon icon={faMusic} className=' font-bold 	text-3xl text-red-500	 m-5'/>
            <FontAwesomeIcon icon={faCamera} className=' font-bold 	text-3xl text-red-500	m-5'/>
            <FontAwesomeIcon icon={faArrowPointer} className=' font-bold 	text-4xl text-red-500 m-5 '/>
                
         </div>
       
       <div className='m-10'>

       <h1 className='font-bold text-5xl text-gray-600 mb-5'>Our App Features</h1>
         <p className='text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>


         <FontAwesomeIcon icon={faBell} className='mx-5 mt-10 font-bold rounded-full	text-3xl text-red-400	p-5 bg-red-100'/>
         <span className='text-2xl font-bold text-gray-500 mb-10'>Instant Notification</span>
         <p className='mt-5 text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem!</p>
           
         <FontAwesomeIcon icon={faHeadSideCough} className='mx-5 mt-10 font-bold rounded-full	text-3xl text-violet-400	p-5 bg-violet-100'/>
         <span className='text-2xl font-bold text-gray-500 mb-10'>User Friendly</span>
         <p className='mt-5 text-2xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem!</p>

         <FontAwesomeIcon icon={faThumbsUp} className='mx-5 mt-10 font-bold rounded-full	text-3xl text-green-400	p-5 bg-green-100'/>
         <span className='text-2xl font-bold text-gray-500  -mt-20'>Secure and Reliable</span>
         <p className='mt-5 text-2xl text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rem!</p>

       </div>
      </div>

      <div className='bg-white p-10 mt-20 rounded-3xl'>
           <div className=' flex justify-evenly'>
           <FontAwesomeIcon icon={faArrowCircleLeft} className='mx-5 mt-10 font-bold rounded-full	text-3xl text-green-400	p-5  bg-green-100'/>
            <span className='text-2xl font-bold text-gray-500 mb-10'>My Cards</span>
            <FontAwesomeIcon icon={faArrowCircleRight} className='mx-5 mt-10 font-bold rounded-full	text-3xl text-green-400	p-5  bg-green-100'/>
           </div>
           <div className='bg-gray-100 mt-5 p-10 rounded-2xl'>
               <h2 className='text-3xl bold text-green-400 text-center'> Balance</h2>
               <h2 className='text-3xl bold text-green-400 text-center'> $20000</h2>
               
           </div>
           <p className='text-7xl font-bold text-gray-600 text-center'>. . .</p>
           <div className='lg:flex justify-around mt-5 bg-slate-300 p-3 rounded-2xl'>
             <button className='text-xl font-medium bg-red-500 p-5 m-1 rounded-3xl text-gray-500'>All</button>
             <button className='text-xl font-medium bg-slate-50 rounded-3xl m-1 p-3 text-gray-500'>Expenses</button>
             <button className='text-xl font-medium bg-slate-50 rounded-3xl p-3 m-1 text-gray-500'>Receives</button>
           </div>
          <div className='p-5'>
             <p className=' text-xl text-gray-600'> 23 June</p>
             <hr />
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Uber</p>
                <p className=' text-2xl font-medium text-gray-600'> $23</p>
             </div>
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Shopping</p>
                <p className=' text-2xl font-medium text-gray-600'> $63</p>
             </div>
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Restaurant</p>
                <p className=' text-2xl font-medium text-gray-600'> $73</p>
             </div>
          </div>


          <div className='p-5'>
             <p className=' text-xl text-gray-600'> 23 August</p>
             <hr />
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Uber</p>
                <p className=' text-2xl font-medium text-gray-600'> $83</p>
             </div>
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Coffee</p>
                <p className=' text-2xl font-medium text-gray-600'> $53</p>
             </div>
             <div className='flex justify-between mt-5'>
                <p className=' text-2xl font-medium text-gray-600'> Work</p>
                <p className=' text-2xl font-medium text-gray-600'> $73</p>
             </div>
          </div>
           
      </div>
    </div>
  )
}