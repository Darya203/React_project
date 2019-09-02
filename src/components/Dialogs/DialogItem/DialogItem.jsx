import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {


  let path = "/dialogs/" + props.id;
  return (
    // <div className={classes.dialog+' '+ classes.active}>
    <div className={classes.dialog}>
      {/* <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo"/> */}
      <img src={props.image} alt="user_photo"/>
      < NavLink to={path} activeClassName={classes.active}  > {props.name} </NavLink>
    </div>
  );
}


export default DialogItem;

// className={classes.dialogName}