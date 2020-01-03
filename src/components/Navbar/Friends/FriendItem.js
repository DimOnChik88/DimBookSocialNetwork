import React from "react";
import Avatar from "../../constant/Avatars";
import {NavLink} from "react-router-dom";
import style from './Friends.module.css'

const FriendItem = ({name, id, gender}) => {
    let avatar='';
    let path = `/messages/${id}`;
    if(gender === 'male') {
       avatar = Avatar.male;
    } else avatar = Avatar.female;

    return (
        <div className={style.friendItem}>
            <img src={avatar} alt="avatar"/>
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>
    )
};

export default FriendItem;
