import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
  // let state = props.store.getState();

  // let addMessage = () => {
  //   props.store.dispatch(addMessageActionCreator());
  // }

  // let onMessageChange = (text) => {
  //   props.store.dispatch(updateNewMessageActionCreator(text));
  // }

  return (
    <StoreContext.Consumer> 
        {
        (store) => {
          let state = store.getState();

          let addMessage = () => {
            store.dispatch(addMessageActionCreator());
          }

          let onMessageChange = (text) => {
            store.dispatch(updateNewMessageActionCreator(text));
          }

          return <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            addMessage={addMessage} updateNewMessage={onMessageChange} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;