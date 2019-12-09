import React from "react";
import style from './MyPosts.module.css';
import Avatar from '../../constant/Avatars';
import Post from "./Post/Post";

const MyProfile = () => {
    return (
        <div>
            My post
           <div>
               <textarea ></textarea>
               <button>Add post</button>
               <button>Remove post</button>
           </div>
            <Post message="Hi world"/>
            <Post message="It's my first post"/>


        </div>

    )

};

export default MyProfile
