import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <img src={props.image} alt="user_photo"/>
      < NavLink to={path} activeClassName={classes.active}  > {props.name} </NavLink>
    </div>
  );
}


export default DialogItem;

// className={classes.dialogName}