import React from 'react';
import classes from './UserOnline.module.css';


const UserOnline = (props) => {

  return (
    <a href="#" className={classes.main_wrapper}>
      <div className={classes.user_wrapper}>
        <img src={props.image} alt="" />
        <span className={classes.online_dot}></span>
      </div>
    </a>
  );
}

export default UserOnline;