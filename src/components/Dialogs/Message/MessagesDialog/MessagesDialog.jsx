import React from 'react';
import classes from './MessagesDialog.module.css';


const MessagesDialog = (props) => {
  
   return (props.data.id==1) ?
     (<div className={classes.message_right}>
       <div className={classes.message_user}>  
         <img src={props.data.image} alt="user_dialog"/>
         <p>{props.data.name}</p>
       </div>
       <div className={classes.message}>{props.data.message}</div>
    </div>)
    :
    (<div className={classes.message_left}>
      <div className={classes.message_user}> 
        <img src={props.data.image} alt="user_dialog"/>
        <p>{props.data.name}</p>
        </div>
      <div className={classes.message}>{props.data.message}</div>   
   </div>)
    ;

}

export default MessagesDialog;