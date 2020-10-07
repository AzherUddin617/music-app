import React, { useState, useEffect } from 'react';
import classes from './Carousel.module.scss';

const Carousel = ({ data, className, style }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=> {
    const interval = setInterval(()=> {
      setActiveIndex(index => index < data.length-1 ? index + 1 : 0);
    }, 5000);

    return ()=> clearInterval(interval);
  }, [data]);

  const rootClass = [classes.Carousel];
  if (className) rootClass.push(className);

  const images = data.map(item => item.image);
  const texts = data.map(item => item.text);

  return (
    <div className={rootClass.join(' ')} style={style ? style:{}}>
      <div className={classes.Images}>
        <div className={classes.Body}>
          {images.map((image, i) => {
            const classNames = [classes.ImageContainer];
            if (activeIndex === i) classNames.push(classes.Active);

            return (
              <div className={classNames.join(' ')} key={i}>
                <img src={image} alt="IMG" className={classes.Image} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.TextContents}>
        {texts.map((text, i) => {
          const classNames = [classes.Text];
          if (i === activeIndex) classNames.push(classes.Active);

          return (
            <div key={i} className={classNames.join(' ')}>
              <h3 className={classes.Title}>{text.title}</h3>
              <p className={classes.Artist}>{text.artist}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;