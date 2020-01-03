import React from "react";
import style from './Post.module.css';
import Avatar from "../../../../constant/Avatars";

const Post = (props) => {
    return (
        <div className={`${style.item}`}>
            <img src={Avatar.male} alt="boy"/>
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    )

};

export default Post;
