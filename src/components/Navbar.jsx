
import logo from '../assets/raviKumarLogo.webp'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 sm:py-5 md:py-6 lg:py-8">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className='mx-2' width={50} height={30} alt='logo' />
                </a>
            </div>
            <div className='m-8 mr-0 flex items-center justify-center gap-10 text-4xl'>
                <a href="https://www.linkedin.com/in/your-linkedin-profiel"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                >
                    <FaLinkedin />
                </a>
                <a href="https://www.github.com/in/your-linkedin-profiel"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}

export default Navbar