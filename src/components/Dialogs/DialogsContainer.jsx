import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (text) => { dispatch(updateNewMessageActionCreator(text)) },
    addMessage: () => { dispatch(addMessageActionCreator()) }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;