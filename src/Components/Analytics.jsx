import laptop from '../Assets/laptop.png';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
       <img src={laptop} alt='laptop-img' className='w-[500px] mx-auto my-4 '/>
        <div className='flex flex-col justify-center '>
          <p className='uppercase text-[#00df9a] font-bold '>Data Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
