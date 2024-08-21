import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col">
      {/* Small Navbar */}
      <div className=" bg-slate-100 border-b ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2 px-8 ">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+91-22-61666555"
              className="flex items-center text-blue-700"
            >
              <i className=" mr-1">
                <FaPhone size={20} />
              </i>
              +91 22467 33630
            </a>
            <a
              href="mailto:globalhr@mgheewala.com"
              className="flex items-center text-blue-700"
            >
              <i className=" mr-1">
                {" "}
                <IoMdMail size={20} />
              </i>
              info@mhtoverseas.com
            </a>
          </div>

          {/* Middle Section */}
          <div className="flex justify-center">
            <span className="text-2xl font-bold text-gray-700">
              بسم الله الرحمن الرحيم
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <a href="/blog" className="text-gray-700 font-semibold hover:border-b-2 border-gray-700 transition-all duration-300">
              Blog
            </a>
            <a href="https://www.facebook.com" className="text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" className="text-black">
              <RiTwitterXFill size={20} />
            </a>
            <a href="https://www.linkedin.com" className="text-blue-600">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com" className="text-red-600">
              <FaSquareYoutube size={20} />
            </a>
            <a href="https://www.whatsapp.com" className="text-green-500">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.telegram.org" className="text-blue-400">
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* big Navbar */}
      <div className="flex items-center justify-between py-5 px-8 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={"/images/mht-logo.png"}
            alt="mht-logo"
            width={400}
            height={400}
            className=" h-16 w-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/industries"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              Industries We Serve
            </Link>
          </li>
          <li>
            <Link
              href="/jobs"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 hover:border-b-2 border-blue-600 transition-all duration-200 font-semibold text-[17px]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Find Job Button */}
        <div className="flex items-center">
          <Link
            href={"/jobs"}
            className=" bg-blue-500 text-white py-4 px-8 rounded-md flex items-center hover:bg-indigo-800 text-[17px] font-semibold"
          >
            FIND JOB
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
