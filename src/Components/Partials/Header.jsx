import style from '../../assets/Style/Header.module.scss'
import { BurgerMenu, Navigation } from '../Partials/Nav'

import profilepicture from "../../assets/Images/mig.jpg"
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";



export const Header = () => {
    return (

        <header>
            <Navigation />
            <BurgerMenu />

            <article>
                <img src={profilepicture} alt="Emilie Østergaard picture" />
                <h2>Emilie Østergaard</h2>
                <h3>Frontend Webudvikler</h3>
                <span>
                    <FaHtml5 />
                    <FaSass />
                    <FaReact />
                </span>
            </article>
        </header>
    )
}