import React from 'react';
import classes from './MessageCreate.module.css';


const MessageCreate = (props) => {

  return (props.id==1) ?
  (<div className={classes.message_right}>
    <div className={classes.message_user}>  
      <img src={props.image} alt="user_dialog"/>
      <p>{props.name}</p>
    </div>
    <div className={classes.message}>{props.message}</div>
 </div>)
 :
 (<div className={classes.message_left}>
   <div className={classes.message_user}> 
     <img src={props.image} alt="user_dialog"/>
     <p>{props.name}</p>
     </div>
   <div className={classes.message}>{props.message}</div>   
</div>)
 ;



  // return (
  //   <div className={classes.message_right}>
  //     <div className={classes.message_user}>
  //       <img src={props.image} alt="user_dialog" />
  //       <p>{props.name}</p>
  //     </div>
  //     <div className={classes.message}>
  //       {props.message}
  //     </div>

  //   </div>)


}

export default MessageCreate;