import React from 'react';
import style from './Navbar.module.css';

const NavBar = () => {
    return (
    <nav className={style.nav}>
        <div className={style.title}><a href='/profile'>Profile</a></div>
        <div className={style.title}><a href='/messages'>Messages</a></div>
        <div className={style.title}><a href='/news'>News</a></div>
        <div className={style.title}><a href='/music'>Music</a></div>
        <div className={`${style.title} ${style.active}`}><a href='/settings'>Settings</a></div>
    </nav>
    )
};

export default NavBar;
