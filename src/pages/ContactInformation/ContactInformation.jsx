import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div id="contact" className="bg-white text-black py-12 px-4 md:px-12">
		<h3 className="text-4xl  text-center font-bold mb-8">Contact Information</h3>
      <div className="w-full  mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Side - Contact Form */}
        <div className="border-2 border-green-400 p-4 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-4">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-green-400 p-2 mb-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-green-400 p-2 mb-3 rounded h-28 md:h-32"
          />
          <button className="w-full bg-green-400 text-white py-2 rounded">
            Send Message
          </button>
        </div>

        {/* Right Side - Contact Information */}
        <div className="border-2 border-green-400 p-4 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-lg md:text-xl font-bold mb-3">Contact Information</h2>

          <div className="space-y-3 md:space-y-4 mt-4">
            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
              <FaEnvelope className="text-green-400" />
              <a href="mailto:akashabdulmazid@gmail.com" className="hover:underline break-words">
                akashabdulmazid@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
              <FaPhone className="text-green-400" />
              <a href="tel:+880123456789" className="hover:underline">
                +880 1234 567 89
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
              <FaWhatsapp className="text-green-400" />
              <a href="https://wa.me/+880123456789" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +880 1234 567 89 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInformation;
