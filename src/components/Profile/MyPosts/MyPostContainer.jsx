import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state=props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (textPost) => {
    props.store.dispatch(updateNewPostActionCreator(textPost));
  }

  return < MyPosts addPost={addPost} updateNewPostText={onPostChange} 
                   posts={state.profilePage.posts} 
                   newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;