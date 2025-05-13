import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext"; // Import ThemeContext
import Swal from "sweetalert2";

const ContactInformation = () => {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async e => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully.',
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: data.message || 'Something went wrong!',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Network error. Please try again later.',
      });
      console.error("Email Send Error: ", error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className={`p-8 shadow-lg rounded-lg flex flex-col lg:flex-row items-center justify-between w-full gap-4 mx-auto ${
        darkMode ? "bg-gray-900 text-white" : "bg-base-200 text-gray-900"
      }`}
    >
      {/* Left Section - Contact Info */}
      <div className="space-y-4 w-full lg:w-1/2 text-center font-semibold lg:text-left">
        <h2 className={`text-3xl font-bold mb-6 text-center ${
          darkMode ? "text-white" : "text-black"
        }`}>
          Contact Information
        </h2>
        <div className="space-y-4">
          <div className={`flex items-center p-3 rounded-lg justify-center lg:justify-start ${
            darkMode ? "bg-gray-800 text-white" : "bg-indigo-200 text-gray-900"
          }`}>
            <FaPhone className="text-xl mr-3" />
            <p>+88-018882-185628</p>
          </div>
          <div className={`flex items-center p-3 rounded-lg justify-center lg:justify-start ${
            darkMode ? "bg-gray-800 text-white" : "bg-indigo-200 text-gray-900"
          }`}>
            <FaEnvelope className="text-xl mr-3" />
            <p>akashabdulmazid@gmail.com</p>
          </div>
          <div className={`flex items-center p-3 rounded-lg justify-center lg:justify-start ${
            darkMode ? "bg-gray-800 text-white" : "bg-indigo-200 text-gray-900"
          }`}>
            <FaMapMarkerAlt className="text-xl mr-3" />
            <p>Feni, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              name="name"
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              className={`input input-bordered w-full ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900"}`}
            />
            <input 
              name="email"
              type="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`input input-bordered w-full ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900"}`}
            />
            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea textarea-bordered w-full ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900"}`}
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">Send</button>
          </form>

      </div>
    </motion.div>
  );
};

export default ContactInformation;
