import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    const { postData, addPost, updateNewPost } = props;
    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={postData} addPost={addPost} updateNewPost={updateNewPost}/>

        </div>
    )
};

export default Profile;
