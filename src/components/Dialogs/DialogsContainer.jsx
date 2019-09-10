import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {


  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  }


  return  <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} 
                   newMessageText={state.dialogsPage.newMessageText}
                   addMessage={addMessage} updateNewMessage={onMessageChange}/>

}

export default DialogsContainer;