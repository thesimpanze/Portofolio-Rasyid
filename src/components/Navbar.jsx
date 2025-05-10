import { motion } from "motion/react";


const Navbar = () => {
    return(
        <div className="fixed top-0  left-1/2 transform -translate-x-1/2 z-40">
            <div className="bg-gray-500/10 text-gray-300 backdrop-blur-md rounded-full font-light text-lg mt-3 px-6 py-2 flex justify-center items-center gap-3 font-jakarta  shadow-[0_0_40px_rgb(16, 125, 229)]">
                <motion.div href="" className="hover:underline ">Home</motion.div>
                <a href="" className="hover:underline ">About</a>
                <a href="" className="hover:underline ">Contact</a>
            </div>

        </div>
    )
}
export default Navbar;