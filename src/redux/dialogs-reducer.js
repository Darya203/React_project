const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText,
                name: 'Sarah Cruiz',
                image: "http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg"
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
            
        default:
            return state;
    }

}

export default dialogsReducer;

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE,
        newMessage: text
    })
