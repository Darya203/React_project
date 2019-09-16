import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return ( 
            <div className={classes.item}>
              <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo"/>
                 {props.message}
                 <div className={classes.item__tools}>
                    <img src="https://st2.depositphotos.com/6504442/9551/i/950/depositphotos_95511170-stock-photo-pink-heart-isolated-on-white.jpg" alt=""/>
                    {props.likesCount}
                </div>
            </div>
      
  );
}

export default Post;