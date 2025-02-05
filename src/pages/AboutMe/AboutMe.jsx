
import {  FaLaptopCode } from 'react-icons/fa';
import { GiShuttlecock } from 'react-icons/gi';
import { MdSportsCricket } from 'react-icons/md';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">About Me</h1>
        <p className="text-base md:text-lg text-gray-600 mt-1 md:mt-2">A little bit about myself</p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Introduction Section */}
        <div className="card bg-base-100 shadow-xl p-4 md:p-6 overflow-hidden">
          <div className="card-body p-0 md:p-4">
            <p className="mb-3 md:mb-4 text-base md:text-lg text-gray-700 leading-relaxed">
              Hi, I’m Abdul Mazid Akash, a passionate frontend web developer with a knack for creating beautiful and functional web applications. My journey started from curiosity, and over time, I&apos;ve honed my skills in HTML, CSS, JavaScript, React, and Tailwind CSS.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I love building interactive UI/UX and enjoy the challenge of solving problems with code. There’s always something new to learn in programming, which keeps me motivated and excited about the work I do.
            </p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="card bg-base-100 shadow-xl p-4 md:p-6 overflow-hidden">
          <div className="card-body p-0 md:p-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Hobbies & Interests</h3>
            <ul className="space-y-3 md:space-y-4">
			<li className="flex items-start">
                <MdSportsCricket className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-green-600" />
                <span className="text-sm md:text-base text-gray-700">
                  Cricket - I&apos;m passionate about cricket, both playing and watching. The strategy and teamwork involved in the game fascinate me, and I enjoy weekend matches with friends.
                </span>
              </li>
              <li className="flex items-start">
                <GiShuttlecock className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-purple-600" />
                <span className="text-sm md:text-base text-gray-700">
                  Badminton - I love the fast-paced nature of badminton. It&apos;s my go-to sport for staying active and improving reflexes, playing regularly at local courts.
                </span>
              </li>
              <li className="flex items-start">
                <FaLaptopCode className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-blue-600" />
                <span className="text-sm md:text-base text-gray-700">
                  Coding - Of course, coding is both my profession and my passion! It’s the heart of everything I do.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;