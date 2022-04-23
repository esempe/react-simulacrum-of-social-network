import React from 'react';
import style from "../SideNav.module.css";

const SideNavFriendsList = (props) => {

     let FriendsListElements = props.state.friendsList.map( (friend)=>
         <SideNavFriendItem friendsName={friend.friendsName} friendsAva={friend.friendsAva}/>
     )



    return (
        <div className={style.FriendsListWrapper}>
            <div className={style.tittle}>Friends</div>
            <div className={style.friendsItemWrapper}>
                {FriendsListElements}
            </div>
        </div>
    );
};

export default SideNavFriendsList;

const SideNavFriendItem = (props) => {
    return (
        <div className={style.friendsItem}>
            <div className={style.friendAva}>{props.friendsAva}</div>
            <div className={style.friendName}>{props.friendsName}</div>
        </div>
    )

}