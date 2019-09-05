const ADD_POST='ADD-POST';
const UPDATE_NEW_POST='UPDATE-NEW-POST';
const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE='UPDATE-NEW-MESSAGE';

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 2 },
        { id: 3, message: 'Very good acount. Like', likesCount: 3 }
      ],
      newPostText: ''
    },

    dialogsPage: {
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

    },

    sidebarPage: {
      friends: [
        { id: 1, name: 'Diana Johns', image: "https://99px.ru/sstorage/53/2017/04/tmb_195671_1033.jpg" },
        { id: 2, name: 'Andre McKartney', image: "http://s2.fotokto.ru/photo/full/162/1624332.jpg" },
        { id: 3, name: 'Sam Smith', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmbY-v4AMbJtYpevRbfMnRRyfHfYpjqj3O62lpgb_O3virSQvvQ" },
        { id: 4, name: 'Mari Leon', image: "https://www.firestock.ru/wp-content/uploads/2015/12/shutterstock_159524642.jpg" },
        { id: 5, name: 'Natali Olsen', image: "http://usiter.com/uploads/20140307/+art+devushka+profil+serga+pirsing+89141797001.jpg" }
      ]

    }

  },
  _callSubscriber() {
    console.log('State changed');
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';

      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: this._state.dialogsPage.newMessageText,
        name: 'Sarah Cruiz',
        image: "http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg"
      }

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);

    }
    else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }

  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (textPost) =>
 ({
    type: UPDATE_NEW_POST,
    newText: textPost
  })

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) =>
 ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: text
  })




window.store = store;

export default store;
