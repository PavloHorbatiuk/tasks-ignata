import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./RoutesPages";
import s from './HW5.module.css'

function Header() {
const activeClass = ({isActive}: { isActive: boolean }) => isActive ? `${s.active} + ${s.link}` : s.link

    return (
        <div className={s.wrapper}>
            <NavLink className={activeClass} to={PATH.PRE_JUNIOR}>
                pre-junior
            </NavLink>
            <NavLink className={activeClass} to={PATH.JUNIOR}>
                junior
            </NavLink>
            <NavLink className={activeClass} to={PATH.JUNIOR_PLUS}>
                junior+
            </NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
