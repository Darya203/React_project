import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';



const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText} 
                  AddPost={props.AddPost}
                    UpdateNewPost={props.UpdateNewPost}/>

     </div>

  );
}

export default Profile;

