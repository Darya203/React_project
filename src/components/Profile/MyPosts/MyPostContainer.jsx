import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

  // let state = props.store.getState();
  // let addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // }
  // let onPostChange = (textPost) => {
  //   props.store.dispatch(updateNewPostActionCreator(textPost));
  //}

  return (
    <StoreContext.Consumer>
       {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (textPost) => {
          store.dispatch(updateNewPostActionCreator(textPost));
        }

        return < MyPosts addPost={addPost} updateNewPostText={onPostChange}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText} />
      }
      }
    </StoreContext.Consumer>
  )

}
export default MyPostsContainer;