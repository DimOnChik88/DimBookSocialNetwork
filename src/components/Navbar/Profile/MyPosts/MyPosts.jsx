import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/profile-reducer";


const MyProfile = (props) => {
    const {postData} = props;
    const postsData = postData.posts;

    let postElement = postsData.map(post => <Post message={post.message} likes={post.likesCount}/>);

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    };

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        placeholder='type here your post'
                        ref={newPost}
                        onChange={onPostChange}
                        value={postData.newPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElement}
        </div>

    )
};

export default MyProfile;
