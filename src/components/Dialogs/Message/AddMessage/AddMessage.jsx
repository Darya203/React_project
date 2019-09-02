import React from 'react';
import classes from './AddMessage.module.css';


const AddMessage = (props) => {

let NewElement = React.createRef();

let AddPost= ()=>{
   let text=NewElement.current.value;
   alert(text);
}


   return <div>
   <div className={classes.formGroup}>
     <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user_photo" />
     <textarea ref={NewElement} className={classes.formControl} name="texts" cols="50" rows="1" placeholder="Write new message">
     </textarea>
   </div>

   <div>
      <button onClick={AddPost} className={classes.btn_send}>
        Send
     </button>
   </div>

</div>


}

export default AddMessage;