import React from 'react';
import classes from './UserOnline.module.css';
import { NavLink } from 'react-router-dom';

const UserOnline = (props) => {

  return (
    <NavLink className={classes.main_wrapper}>
      <div className={classes.user_wrapper}>
        <img src={props.image} alt="" />
        <span className={classes.online_dot}></span>
      </div>

    </NavLink>
  );
}

export default UserOnline;