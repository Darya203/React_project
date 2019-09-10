import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let textPost = e.target.value;
    props.updateNewPostText(textPost);
    // props.dispatch(updateNewPostActionCreator(textPost));
  }

  return (
    <div className={classes.postsBlock}>
      My Post
       <div>
        <div className={classes.formGroup}>
            <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo" />
            <textarea onChange={onPostChange} className={classes.formControl} name="texts" cols="50" rows="1"
               value={props.newPostText} placeholder="Write what you wish" />
        </div>
         <div>
          <button onClick={onAddPost} className={classes.btn_publish}>
             Publish
          </button>
         </div>

       </div>

      <div className={classes.posts}>
        {postsElements}
      </div>

    </div>
  );
}

export default MyPosts;