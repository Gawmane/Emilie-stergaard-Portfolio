import style from '../../assets/Style/Footer.module.scss'
import { AiFillLinkedin, AiFillPhone, AiOutlineMail, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer>
            <h4>Jeg er social!</h4>
            <span>
                <a href="mailto:emilie.asferg@hotmail.dk"><AiOutlineMail /></a>
                <a href="tel:+4581146022"><AiFillPhone /></a>

                <a href="http://www.linkedin.com/in/emilie-østergaard-677476220" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/Gawmane" target="_blank"><AiFillGithub /></a>
            </span>
        </footer>
    )
}