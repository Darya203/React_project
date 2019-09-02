import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {

  return (
    <div className={classes.profileWrapper}>
       
       <div className={classes.item}>
          <div>
            {/* <img src="https://img2.goodfon.ru/wallpaper/nbig/4/1c/devushka-blondinka-smeetsya.jpg" /> */}
           </div>
            <div className={classes.profileUser}>
               <div className={classes.profileUser_Avatar}>
                 {/* <img src="https://img2.goodfon.ru/wallpaper/nbig/4/1c/devushka-blondinka-smeetsya.jpg" alt="user1"/> */}
                 <img src="http://img0.liveinternet.ru/images/attach/c/4/82/542/82542330_x_16faeac4.jpg" alt="user1"/>
               </div>
               <div className={classes.profileUser_info}>
                      <span>Sarah Cruiz</span> 
                      <p>Personal information</p> 
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi alias, quos minima officia, inventore quisquam dicta rem nesciunt ea facilis laudantium ad vel minus soluta facere, illum commodi dolorem est!</p>
               </div>
            </div>
         </div>
      
       </div>

  );
}

export default ProfileInfo;