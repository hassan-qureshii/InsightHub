import One_person from '../Assets/One_person.png';
import Two_persons from '../Assets/Two_persons.png';
import Three_persons from '../Assets/three_persons.png';
const Cards = () => {
  return (
    <div className='bg-white py-[10rem] px-4 w-full cursor-pointer'>
      <div className="w-full max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className='w-full  bg-gray-50 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-white-50'>
             <img src={One_person} alt="" className='w-35 mx-auto mt-[-3rem] '/>  
             <h2 className='text-2xl font-bold text-center py-8'>Signle User </h2>
             <p className='text-center text-4xl font-bold'>$149</p>
             <div className='text-center font-medium '>
               <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
               <p className='py-2 border-b mx-8'>1 Granted User</p>
               <p className='py-2 border-b mx-8'>Send Up to 2 GB</p>
             </div>    
             <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
             
        </div>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300 shadow-white-50'>
             <img src={Two_persons} alt="" className='w-27 mx-auto mt-[-3rem] '/> 
             <h2 className='text-2xl font-bold text-center py-8'>PatnerShip </h2>
             <p className='text-center text-4xl font-bold'>$199</p>
             <div className='text-center font-medium '>
               <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
               <p className='py-2 border-b mx-8'>3 Users Allowed</p>
               <p className='py-2 border-b mx-8'>Send Up to 10 GB</p>
             </div>     
             <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
        </div>

        <div className='w-full shadow-xl bg-gray-50 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 shadow-white-50'>
             <img src={Three_persons} alt="" className='w-30 mx-auto mt-[-3rem]'/>
             <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
             <p className='text-center text-4xl font-bold'>$299</p>
             <div className='text-center font-medium '>
               <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
               <p className='py-2 border-b mx-8'>10 Users Allowed</p>
               <p className='py-2 border-b mx-8'>Send Up to 20 GB</p>
             </div>      
             <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
