import style from '../../assets/Style/Nav.module.scss'
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";

export const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.ulwrapper}>
                <li><NavLink to={'/'}>Forside</NavLink></li>
                <li><NavLink to={'/about'}>Om mig</NavLink></li>
                <li><NavLink to={'/portfolio'}>Portfoilo</NavLink></li>
            </ul>
        </nav>
    )
}

export function BurgerMenu() {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className={isActive ? style.burgerMenuActive : style.burgerMenu} onClick={handleToggle}>
                <AiFillHome className={style.burgerMenuHome} />
                <AiOutlineClose className={style.burgerMenuClose} />
            </div>

            <ul className={isActive ? style.activeMenu : style.menu}>
                <li><NavLink className={style.navigationLinks} to="/" onClick={handleToggle}>Forside</NavLink></li>
                <li><NavLink className={style.navigationLinks} to="/about" onClick={handleToggle}>Om mig</NavLink></li>
                <li><NavLink className={style.navigationLinks} to="/portfolio" onClick={handleToggle}>Portfolio</NavLink></li>
            </ul>
        </>
    )
}
