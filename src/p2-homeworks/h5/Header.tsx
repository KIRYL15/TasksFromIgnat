import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import style from './Header.module.css'

const activeLink = (isActive: boolean) => isActive ? style.activeLink : style.link

export function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? style.activeLink : style.link}>Pre_Junior </NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => isActive ? style.activeLink : style.link}> Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => isActive ? style.activeLink : style.link}> Junior Plus </NavLink>
        </div>
    )
}

