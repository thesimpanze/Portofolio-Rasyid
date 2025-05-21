import Lanyard from "./Lanyard";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import TextPressure from "./TextPressure";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white relative w-full md:w-[90%] h-auto md:h-3/4 rounded-lg overflow-hidden shadow-lg">
      {/* 3D Lanyard */}
      <div className="w-full md:w-[40%] h-60 md:h-auto">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-[60%] flex justify-center items-center border-t md:border-t-0 md:border-l border-gray-300 px-6 py-6">
        <div className="w-full max-w-md flex flex-col justify-center items-center text-center gap-3">
          <TextPressure
            text="Get In Touch!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={28} 
          />
          <p className="text-gray-500 text-sm md:text-base mt-2">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="text-xl md:text-2xl flex mt-4 gap-5">
            <a href="https://wa.me/6285156696946" target="_blank"><FaWhatsapp className="hover:text-green-500 transition" /></a>
            <a href="https://instagram.com/whorsyd" target="_blank"><FaInstagram className="hover:text-pink-500 transition" /></a>
            <a href="https://linkedin.com/in/rasyid-nuruddin" target="_blank"><FaLinkedin className="hover:text-blue-600 transition" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
