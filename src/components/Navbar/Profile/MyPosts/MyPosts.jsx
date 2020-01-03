import React from "react";
import Post from "./Post/Post";

const MyProfile = (props) => {
    const {postData, updateNewPost} = props;
    const postsData = postData.posts;

    let postElement = postsData.map(post => <Post message={post.message} likes={post.likesCount}/>);

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        updateNewPost(text);
    };

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPost}
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
