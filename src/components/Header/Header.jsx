import React from 'react';
import  classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.header}>
            <img src="http://mythemestore.com/friend-finder/images/logo.png" />
        </header>
    );
}

export default Header;