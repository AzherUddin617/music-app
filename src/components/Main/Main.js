import React from 'react';
import Carousel from '../UI/Carousel/Carousel';
import ContentsRow from '../UI/ContentsRow/ContentsRow';
import classes from './Main.module.scss';

const Main = ({ topTracks }) => {
  const carouselData = topTracks.map(track => ({
    image: track.album.cover_xl,
    text: { title: track.title_short, artist: track.artist.name }
  }));

  return (
    <div className={classes.Main}>
      <div className={classes.Carousel}>
        <div className={classes.Content}>
          <Carousel data={carouselData} />
        </div>
      </div>

      <div className={classes.Contents}>
        <ContentsRow title="Songs" contents={[...carouselData, ...carouselData, ...carouselData, ...carouselData, carouselData[0]]} />
        <ContentsRow title="Albums" contents={[...carouselData, ...carouselData, ...carouselData, ...carouselData]} />
        <ContentsRow title="Artists" contents={[...carouselData, ...carouselData, ...carouselData, ...carouselData]} />
      </div>
    </div>
  );
}

export default Main;