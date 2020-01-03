import React from "react";
import {NavLink} from "react-router-dom";
import Avatar from '../../../constant/Avatars';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    let avatar = '';

    if (props.gender === 'male') {
        avatar = Avatar.male;
    } else avatar = Avatar.female;

    return (
        <div className={style.user}>
            <img src={avatar} alt="avatar"/>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem;
