import { FaDribbbleSquare, FaFacebook, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="w-full mx-auto text-gray-300 mx-w-[1024px] bg-[#000] py-16 px-4 grid lg:grid-cols-5 gap-8">
     <div>
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <div className='flex space-x-5 text-4xl mt-6'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitterSquare />
        <FaGithubSquare />
        <FaDribbbleSquare />
       </div>
      </div>

      <div>
       <h6 className="font-medium text-gray-500 mb-4 text-2xl ">Solutions</h6>
       <ul>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Analytics</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Marketing</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Commerce</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Insights</a></li>
       </ul>
      </div>
      
      <div>
       <h6 className="font-medium text-gray-500 mb-4 text-2xl">Support</h6>
       <ul>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Pricing</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Documentation</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Guides</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>API Status</a></li>
       </ul>
      </div>

       <div>
       <h6 className="font-medium text-gray-500 mb-4 text-2xl">Company</h6>
       <ul>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>About</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Blog</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Jobs</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#023a29]'>Press</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Careers</a></li>
       </ul>
      </div>

       <div>
       <h6 className="font-medium text-gray-500 mb-4 text-2xl">Legal</h6>
       <ul>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Claim</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Policy</a></li>
         <li className='py-2 text-sm'><a href="#" className='hover:text-[#00df9a]'>Terms</a></li>
       </ul>
      </div>

    </div>
  )
}

export default Footer
