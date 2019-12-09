import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';


const Profile = () => {
    return (
        <div >
            <div><
                img src="http://digitalimagemakerworld.com/images/picture/37509081-picture.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    )
};

export default Profile;
