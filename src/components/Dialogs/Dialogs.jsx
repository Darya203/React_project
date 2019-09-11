import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} image={dialog.image}/>);


  return (
    <div className={classes.dialogsWrapper}>
      <span>Dialogs</span>

      <div className={classes.dialogs}>

         <div className={classes.dialogsItems}>
           {dialogsElements}
         </div>
         
           <div className={classes.messages}>
            <Message dialogsPage={props.dialogsPage} 
                     addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}/>
           </div>

      </div>

    </div>
  );
}

export default Dialogs;