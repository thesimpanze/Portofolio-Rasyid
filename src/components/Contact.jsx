import Lanyard from "./Lanyard";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import TextPressure from "./TextPressure";

const Contact = () => {
  return (
    <div className="flex bg-white relative  w-[90%] h-3/4 rounded-lg">
      <div className="w-[40%]  top-0 ">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]}/>
      </div>
      <div className=" w-[60%] flex justify-center items-center border-l-gray-700 border-2">
        <div className="w-[80%] flex flex-col justify-center items-center">
          <TextPressure text="Get In Touch!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#000000"
    strokeColor="#ff0000"
    minFontSize={36}/>
          <div className="">
            <p className="text-gray-500 mt-2 text-center">I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          <div className="text-2xl flex mt-2 gap-3">
            <FaWhatsapp />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
