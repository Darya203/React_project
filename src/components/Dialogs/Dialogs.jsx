import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} image={dialog.image}/>);
  let messagesElements =props.state.messages.map((m) => <Message key={m.id} message={m.message} image={m.image} id={m.id} name={m.name}/>)
  

  return (
    <div className={classes.dialogsWrapper}>
      <span>Dialogs</span>

      <div className={classes.dialogs}>

        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={classes.messages}>
          {messagesElements}
        </div>

      </div>

    </div>
  );
}

export default Dialogs;