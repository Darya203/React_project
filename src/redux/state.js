import { rerenderEntireTree } from './../render';


let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 2 },
      { id: 3, message: 'Very good acount. Like', likesCount: 3 }
    ],
    newPostText :'' 
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Diana Johns', image: "https://99px.ru/sstorage/53/2017/04/tmb_195671_1033.jpg" },
      { id: 2, name: 'Andre McKartney', image: "http://s2.fotokto.ru/photo/full/162/1624332.jpg" },
      { id: 3, name: 'Sam Smith', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmbY-v4AMbJtYpevRbfMnRRyfHfYpjqj3O62lpgb_O3virSQvvQ" },
      { id: 4, name: 'Mari Leon', image: "http://yoga-station.spb.ru/img/10fd1f03583356463272353bcbc00dee.jpg" },
      { id: 5, name: 'Natali Olsen', image: "http://usiter.com/uploads/20140307/+art+devushka+profil+serga+pirsing+89141797001.jpg" }
    ],
    messages: [
      { id: 1, message: 'Hi honey, how are you doing???? Long time no see. Where have you been?', name: 'Diana Johns', image: "https://99px.ru/sstorage/53/2017/04/tmb_195671_1033.jpg" },
      { id: 2, message: 'I have been on vacation', name: 'Sarah Cruiz', image: "http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" }
    ],
    newMessageText:''

  }

}

window.state=state;

//Добавляем пост in Profile-MyPosts-Post
export let AddPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';

  rerenderEntireTree(state);
}

//Переписываем пост in Profile-MyPosts-Post
export let UpdateNewPost = (newText) => {
  state.profilePage.newPostText=newText;
  rerenderEntireTree(state);
} 



//добавляем новое сообщение в Dialogs
export let AddMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
    name: 'Sarah Cruiz',
    image: "http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg"
  }

  state.dialogsPage.messages.push(newMessage);
  state.profilePage.newMessageText='';
  rerenderEntireTree(state);

}

export let UpdateNewMessage = (newMessage) => {
  state.dialogsPage.newMessageText=newMessage;
  rerenderEntireTree(state);
}


export default state;
