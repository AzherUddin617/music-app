import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <h1 className={classes.Title}>Music <span>App</span></h1>
        <p className={classes.Subtitle}>Deezer API</p>
      </div>
    </div>
  );
}

export default Header;