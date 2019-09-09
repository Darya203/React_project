import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage=sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  }
}


window.store = store;

export default store;
