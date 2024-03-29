import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';



const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer />            
     </div>

  );
}

export default Profile;

