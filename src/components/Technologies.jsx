import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})



const Technologies = () => {
    return (
        <div className="pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 2.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 3 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className="p-2">
                    <FaHtml5 className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-2">
                    <FaCss3Alt className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-2">
                    <FaBootstrap className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-2">
                    <FaSass className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-2">
                    <DiJqueryLogo className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    className="p-2">
                    <RiTailwindCssLine className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-2">
                    <IoLogoJavascript className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-2">
                    <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies