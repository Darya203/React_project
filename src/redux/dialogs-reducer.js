const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Diana Johns', image: "https://99px.ru/sstorage/53/2017/04/tmb_195671_1033.jpg" },
        { id: 2, name: 'Andre McKartney', image: "http://s2.fotokto.ru/photo/full/162/1624332.jpg" },
        { id: 3, name: 'Sam Smith', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmbY-v4AMbJtYpevRbfMnRRyfHfYpjqj3O62lpgb_O3virSQvvQ" },
        { id: 4, name: 'Mari Leon', image: "https://www.firestock.ru/wp-content/uploads/2015/12/shutterstock_159524642.jpg" },
        { id: 5, name: 'Natali Olsen', image: "http://usiter.com/uploads/20140307/+art+devushka+profil+serga+pirsing+89141797001.jpg" }
    ],
    messages: [
        { id: 1, message: 'Hi honey, how are you doing???? Long time no see. Where have you been?', name: 'Diana Johns', image: "https://99px.ru/sstorage/53/2017/04/tmb_195671_1033.jpg" },
        { id: 2, message: 'I have been on vacation', name: 'Sarah Cruiz', image: "http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" }
    ],
    newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {
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
