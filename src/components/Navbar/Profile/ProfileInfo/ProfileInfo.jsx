import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div><
                img src="https://3.bp.blogspot.com/-wx2aY298hR4/XHMvNc6eTaI/AAAAAAAAG1Q/hV1favdIfkQNYPd35M3iU_l8Ot1BbMoogCHMYCw/s1600/best-ubuntu-hd-wallpapers-for-download-mytechshout.jpg" alt="avatar"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
};

export default ProfileInfo;
