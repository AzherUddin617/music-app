import React, { useState, useEffect, useRef } from 'react';
import ContentsTitle from '../ContentsTitle/ContentsTitle';
import classes from './ContentsRow.module.scss';
import img from './temp.jpg';
import { convertRemToPixels } from '../utiles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretSquareLeft,
  faCaretSquareRight
} from '@fortawesome/free-solid-svg-icons';

const itemWidth = convertRemToPixels(14);

const ContentsRow = ({ title, contents, className, style }) => {
  const [contentSize, setContentSize] = useState({ width: 100, height: 100 });
  const [transX, setTransX] = useState(0);
  const rowRef = useRef();

  useEffect(()=> {
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      setContentSize({
        width: window.innerWidth - rect.left,
        offsetLeft: rect.left,
        height: rect.height
      });
    }
  }, []);

  const jumpRight = ()=> {
    const maxN = Number.parseInt(contentSize.width / itemWidth);
    const len = contents.length;
    // console.log(maxN, contentSize, contents.length);
    if (transX < (len - maxN) * itemWidth)
      setTransX(x => x + (itemWidth * Math.min(maxN, len - maxN - Number.parseInt(transX / itemWidth))));
  }
  const jumpLeft = ()=> {
    const maxN = Number.parseInt(contentSize.width / itemWidth);
    const len = contents.length;
    // console.log(maxN, contentSize, contents.length);
    if (transX > 0)
      setTransX(x => x - (itemWidth * Math.min(maxN, Number.parseInt(transX / itemWidth))));
  }

  const rootClass = [classes.ContentsRow];
  if (className) rootClass.push(className);

  return (
    <div className={rootClass.join(' ')} style={style ? style:{}}>
      <ContentsTitle>{title}</ContentsTitle>

      <div className={classes.ChangeButtons}>
        <div className={classes.Arrow} onClick={jumpLeft}>
          <FontAwesomeIcon icon={faCaretSquareLeft} color="inherit" fontSize="inherit" />
        </div>
        <div className={classes.Arrow} onClick={jumpRight}>
          <FontAwesomeIcon icon={faCaretSquareRight} color="inherit" fontSize="inherit" />
        </div>
      </div>

      <div className={classes.Contents} style={{ height: contentSize.height }}>
        <div className={classes.Row} ref={rowRef} style={{
          transform: `translateX(-${transX}px)`
        }}>
          {contents.map((item, i)=> {

            return (
              <div className={classes.Item} key={i} style={{ width: itemWidth }}>
                <div className={classes.Cover}>
                  <img src={item.image} alt="IMG" className={classes.Image} />
                </div>

                <div className={classes.Text}>
                  <h4 className={classes.Title}>{item.text.title}</h4>
                  <p className={classes.Artist}>{item.text.artist}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentsRow;