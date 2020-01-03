import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div><
                img src="http://digitalimagemakerworld.com/images/picture/37509081-picture.jpg" alt="avatar"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
};

export default ProfileInfo;
