import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInformation = () => {
  return (
  <>

  <div className="text-center">
  <h2 className="text-3xl font-bold mb-6  text-blue-600">Let&apos;s work together!</h2>
  <p className="mb-4 text-sm font-semibold">I design and code beautifully simple things and I love what I do.</p>
  </div>
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-900 text-white rounded-lg gap-8">

      
{/* Contact Form */}
<motion.div 
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg lg:mr-8"
>

  <form className="space-y-4">
    <div className="flex space-x-2">
      <input type="text" placeholder="First name" className="input input-bordered w-full bg-gray-700" />
      <input type="text" placeholder="Last name" className="input input-bordered w-full bg-gray-700" />
    </div>
    <div className="flex space-x-2">
      <input type="email" placeholder="Email address" className="input input-bordered w-full bg-gray-700" />
      <input type="tel" placeholder="Phone number" className="input input-bordered w-full bg-gray-700" />
    </div>
    <textarea className="textarea textarea-bordered w-full bg-gray-700" placeholder="Message"></textarea>
    <button className="btn bg-purple-500 text-white w-full hover:bg-purple-600">Send Message</button>
  </form>
</motion.div>

{/* Contact Info */}
<motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-8 lg:mt-0"
>
  <div className="space-y-4 text-center lg:text-left">
    <div className="flex items-center space-x-4">
      <FaWhatsapp className="text-purple-400 text-xl" />
      <p className="text-lg">+088 01882 185628</p>
    </div>
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-purple-400 text-xl" />
      <p className="text-lg">akashabdulmazid@gmail.com</p>
    </div>
    <div className="flex items-center space-x-4">
      <FaMapMarkerAlt className="text-purple-400 text-xl" />
      <p className="text-lg">Dhaka, Bangladesh</p>
    </div>
  </div>
</motion.div>
</div>
  </>
  );
};

export default ContactInformation;
