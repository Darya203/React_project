import React from 'react';
import classes from './Sidebar.module.css';
import UserOnline from './UserOnline/UserOnline';


const Sidebar = (props) => {

    let usersOnline = props.sidebarPage.friends.map((f) => <UserOnline key={f.id} image={f.image} />)

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Online friends
            </div>
            <div>
                {usersOnline}
            </div>

        </div>
    );
}

export default Sidebar;