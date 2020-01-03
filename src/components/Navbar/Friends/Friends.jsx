import React from "react";
import FriendItem from "./FriendItem";
import style from './Friends.module.css';

const Friends = ({friends}) => {

    let friendElement = friends.map(friend => <FriendItem name={friend.name} id={friend.id} gender={friend.gender}/>);

    return (
        <div className={style.friendsList}>
            Friends List
            <div>
                {friendElement}
            </div>
        </div>
    );

};

export default Friends;
