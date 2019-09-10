import React from 'react';
import classes from './Message.module.css';
import MessageCreate from './MessageCreate/MessageCreate';

const Message = (props) => {

  let messagesElements = props.messages.map((m) =>
    <MessageCreate key={m.id} message={m.message} image={m.image} id={m.id} name={m.name} />)


  let onAddMessage = () => {
    props.addMessage();
    // props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (e) => {

    let text = e.target.value;
    props.updateNewMessage(text);
  //  props.store.dispatch(updateNewMessageActionCreator(text));
  }

  return (
    <div >
      <div>
        {messagesElements}
      </div>

      <div className={classes.formGroup}>
        <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo" />
        <textarea className={classes.formControl} value={props.newMessageText}
          onChange={onMessageChange} name="texts" cols="50" rows="1" placeholder="Write new message">
        </textarea>
      </div>

      <div>
        <button onClick={onAddMessage} className={classes.btn_send}>
          Send
          </button>
      </div>

    </div>)


}

export default Message;