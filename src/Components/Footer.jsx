import {
  FaDribbbleSquare,
  FaFacebook,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-8">
        
        {/* Brand + Social */}
        <div>
          <h1 className="text-3xl font-bold text-[#00df9a]">InsightHub</h1>
          <p className="py-4 text-gray-400">
            Empowering businesses with real-time analytics, marketing insights, and scalable SaaS solutions.
          </p>
          <div className="flex space-x-5 text-3xl mt-6">
            <FaFacebook className="hover:text-[#00df9a] transition-colors duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-[#00df9a] transition-colors duration-300 cursor-pointer" />
            <FaTwitterSquare className="hover:text-[#00df9a] transition-colors duration-300 cursor-pointer" />
            <FaGithubSquare className="hover:text-[#00df9a] transition-colors duration-300 cursor-pointer" />
            <FaDribbbleSquare className="hover:text-[#00df9a] transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h6 className="font-medium text-gray-400 mb-4 text-xl">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Analytics</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Marketing</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Commerce</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Insights</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="font-medium text-gray-400 mb-4 text-xl">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Pricing</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Documentation</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Guides</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">API Status</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-medium text-gray-400 mb-4 text-xl">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">About</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Blog</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Jobs</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Press</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-medium text-gray-400 mb-4 text-xl">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Claim</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Policy</li>
            <li className="py-2 text-sm hover:text-[#00df9a] transition-colors">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;