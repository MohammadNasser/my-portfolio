import profilePic from '../assets/mdfaragProfile.png'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1, x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1, x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const Hero = () => {
    return (
        <div className="pb-6 lg:mb-32">
            <div className="flex flex-wrap lg:flex-row-reverse lg:mt-10">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-end lg:p-8">
                        <motion.img src={profilePic} alt="Ravi Kumar" className='max-lg:mx-auto border border-stone-900 rounded-3xl '
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h2
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-6xl'>Mohammad Nasser</motion.h2>
                        <motion.span
                            variants={childVariants}
                            className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Frontend Web Developer</motion.span>
                        <motion.p
                            variants={childVariants}
                            className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{HERO_CONTENT}</motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/mdfreusme.pdf"
                            target='_blank'
                            rel='onopener noreferrer'
                            download
                            className='bg-white rounded-full p-4 text-sm text-stone-800 mb-6'>
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero