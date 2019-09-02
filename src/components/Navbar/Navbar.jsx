import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

console.log(classes);

const Navbar = () => {

  return (
    <nav>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>My profile</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/newsfeed" activeClassName={classes.activeLink}>News</NavLink>

      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;