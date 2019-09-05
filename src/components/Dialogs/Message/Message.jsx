import React from 'react';
import classes from './Message.module.css';
import MessageCreate from './MessageCreate/MessageCreate';
import {addMessageActionCreator,updateNewMessageActionCreator} from '../../../redux/state';

const Message = (props) => {

  
  let messagesElements = props.data.dialogsPage.messages.map((m) =>
    <MessageCreate  key={m.id} message={m.message} image={m.image} id={m.id} name={m.name} />)

  let newMessage=React.createRef();
  
  let addMessage =()=>{
      props.data.dispatch(addMessageActionCreator());
  }

  let onMessageChange=()=>{
    let text=newMessage.current.value;
      props.data.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div >
      <div>
        {messagesElements}
      </div>

      <div className={classes.formGroup}>
        <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo" />
        <textarea ref={newMessage} className={classes.formControl} value={props.data.dialogsPage.newMessageText} onChange={onMessageChange} name="texts" cols="50" rows="1" placeholder="Write new message">
        </textarea>
      </div>

      <div>
        <button onClick={addMessage} className={classes.btn_send}>
          Send
          </button>
      </div>

    </div>)


}

export default Message;