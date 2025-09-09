import { FaLinkedin, FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <p>
                &copy; Gabriel Barrionuevo |
                <a href="https://www.linkedin.com/in/gabrielnbr89/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={25} /></a> |
                <a href="https://github.com/gabrielnbr89" target="_blank" rel="noopener noreferrer"> <FaGithub size={25} /></a>
            </p>
        </footer>
    )
}

export default Footer