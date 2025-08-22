import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-white py-20 px-4'>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
     <div>
       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips & Tricks to optimize your flow?</h1>
       <p className='font-bold'>Sign up to our newsletter and stay up to date.</p>
     </div>

    <div  className='flex flex-col justify-center'>
     <div>
       <input type='text' placeholder='Enter your email' className='w-full max-w-80 p-2 mr-5 mb-5  bg-white rounded-[5px] text-black'/>
       <button className='text-black bg-[#00df9a] w-[100px] p-2 rounded-[5px]'>Notify me</button>
    </div>

    <div>
       <p>We care about the protection of your data. Read our</p>
       <a className='cursor-pointer underline text-[#00df9a]'>privacy Policy</a>
     </div>
    </div>
    </div>
      
    </div>
  )
}

export default NewsLetter
