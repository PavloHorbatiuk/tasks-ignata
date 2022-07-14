import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./RoutesPages";
import s from './HW5.module.css'

function Header() {


    return (
        <div className={s.wrapper}>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}>
                pre-junior
            </NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}>
                junior
            </NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>
                junior+
            </NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
