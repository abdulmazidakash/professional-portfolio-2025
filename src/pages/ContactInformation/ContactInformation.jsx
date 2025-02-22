import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="p-8 bg-base-200 text-gray-900 shadow-lg rounded-lg flex flex-col lg:flex-row items-center justify-between w-full gap-4 mx-auto"
    >
      {/* Left Section - Contact Info */}
      <div className="space-y-4 w-full lg:w-1/2 text-center font-semibold lg:text-left">
      <h2 className="text-3xl font-bold mb-6 text-center  text-black">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center bg-indigo-200 p-3 rounded-lg justify-center lg:justify-start">
            <FaPhone className="text-xl mr-3" />
            <p>+88-018882-185628</p>
          </div>
          <div className="flex items-center bg-indigo-200 p-3 rounded-lg justify-center lg:justify-start">
            <FaEnvelope className="text-xl mr-3" />
            <p>akashabdulmazid@gmail.com</p>
          </div>
          <div className="flex items-center bg-indigo-200  p-3 rounded-lg justify-center lg:justify-start">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <p>Feni, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-white text-gray-900" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-white text-gray-900" />
          <textarea className="textarea textarea-bordered w-full bg-white text-gray-900" placeholder="Your Message"></textarea>
          <button className="btn btn-primary w-full">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactInformation;
