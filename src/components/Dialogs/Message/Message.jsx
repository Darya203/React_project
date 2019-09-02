import React from 'react';
import classes from './Message.module.css';
import MessagesDialog from './MessagesDialog/MessagesDialog';
import AddMessage from './AddMessage/AddMessage';


const Message = (props) => {
  return (props.id == 1) ?
    (<div>
      <MessagesDialog data={props} />
    </div>)
    :
    (<div>
      <MessagesDialog data={props} />
      <AddMessage />
    </div>);


}

export default Message;