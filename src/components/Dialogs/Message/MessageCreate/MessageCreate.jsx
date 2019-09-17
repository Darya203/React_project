import React from 'react';
import classes from './MessageCreate.module.css';


const MessageCreate = (props) => {

  return (<div  className={(props.id==1) ? classes.message_right : classes.message_left} >
    <div className={classes.message_user}>  
      <img src={props.image} alt="user_dialog"/>
      <p>{props.name}</p>
    </div>
    <div className={classes.message}>{props.message}</div>
 </div>)
 ;
}

export default MessageCreate;