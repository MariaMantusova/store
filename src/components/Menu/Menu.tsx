import React, {useState, ReactNode} from "react"
import "./Menu.css";
import {CgClose, CgMenu} from "react-icons/cg";
import {NavLink} from "react-router-dom";

interface IPropsMenu {
    children?: ReactNode
}

function Menu(props: IPropsMenu) {
    const [open, setOpen] = useState(false);

    const menuIcon = <CgMenu className="menu__icon" onClick={() => setOpen(!open)} />;
    const menuCloseIcon = <CgClose className="menu__icon menu-close__icon"
                                   onClick={() => setOpen(!open)}/>;
    return (
        <>
            {open ? menuCloseIcon : menuIcon}
            {open &&
            <nav className="menu__nav">
                <NavLink to="/women's-clothes"
                         className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Женская
                    одежда</NavLink>
                <NavLink to="/men's-clothes"
                         className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Мужская
                    одежда</NavLink>
                <NavLink to="/electronics"
                         className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Электроника</NavLink>
                <NavLink to="/jewelery" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Ювелирные
                    изделия</NavLink>
                {props.children}
            </nav>
            }
        </>
    )
}

export default Menu;
