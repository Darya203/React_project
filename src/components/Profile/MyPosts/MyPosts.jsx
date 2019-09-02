import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


let postsElements=props.posts.map( (p)=>  <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

let newPost=React.createRef();

const addPost=()=>{
  let textPost=newPost.current.value;
  props.AddPost(textPost);
 
}



  return (
    <div className={classes.postsBlock}>
      My Post
             <div>
                <div className={classes.formGroup}>
                  <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo" />
                  <textarea ref={newPost} className={classes.formControl} name="texts" cols="50" rows="1" placeholder="Write what you wish">
                  </textarea>
                </div>

                <div>
                   <button onClick={addPost} className={classes.btn_publish}>
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