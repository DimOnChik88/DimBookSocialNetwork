import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = ({friends}) => {

    return (
        <nav className={style.nav}>
            <div className={style.title}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.title}>
                <NavLink to='/messages' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.title}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.title}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={`${style.title}`}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <Friends friends={friends}/>
        </nav>
    )
};

export default NavBar;
