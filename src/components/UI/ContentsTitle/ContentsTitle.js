import React from 'react';
import classes from './ContentsTitle.module.scss';

const ContentsTitle = ({ children, className, style }) => {
  const rootClass = [classes.ContentsTitle];
  if (className) rootClass.push(className);

  return (
    <h1 className={rootClass.join(' ')} style={style ? style:{}}>
      <span>Latest</span> {children}
    </h1>
  );
}

export default ContentsTitle;