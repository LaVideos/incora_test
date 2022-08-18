import React,{FC} from 'react';
import {NavLink} from "react-router-dom";
import css from './header.module.css'

const HeaderComponent:(FC) = () => {
    return (
        <div className={css.header}>
            <div className={css.link}>
                <NavLink to={'movies'}>Movie</NavLink>
                <NavLink to={'series'}>Series</NavLink>
                <div><NavLink to={'find'}>Find Movie</NavLink></div>
            </div>
        </div>
    );
};

export default HeaderComponent;