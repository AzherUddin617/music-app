import React, { Component } from 'react';
import axios from 'axios';

import classes from './App.module.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const tempData = {
  "data": [
    {
      "id": 1095899492,
      "title": "Savage Love (Laxed - Siren Beat) (BTS Remix)",
      "title_short": "Savage Love (Laxed - Siren Beat)",
      "title_version": "(BTS Remix)",
      "link": "https://www.deezer.com/track/1095899492",
      "duration": 184,
      "rank": 100000,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-2.dzcdn.net/stream/c-2cf38a95104505ed9e0c7ff84eaaaec6-3.mp3",
      "md5_image": "e81ea567c8ca45a3992b50a240f08f47",
      "position": 1,
      "artist": {
        "id": 92319522,
        "name": "Jawsh 685",
        "link": "https://www.deezer.com/artist/92319522",
        "picture": "https://api.deezer.com/artist/92319522/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e81ea567c8ca45a3992b50a240f08f47/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e81ea567c8ca45a3992b50a240f08f47/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e81ea567c8ca45a3992b50a240f08f47/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e81ea567c8ca45a3992b50a240f08f47/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/92319522/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 176784522,
        "title": "Savage Love (Laxed - Siren Beat) [BTS Remix]",
        "cover": "https://api.deezer.com/album/176784522/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e81ea567c8ca45a3992b50a240f08f47/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e81ea567c8ca45a3992b50a240f08f47/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e81ea567c8ca45a3992b50a240f08f47/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e81ea567c8ca45a3992b50a240f08f47/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e81ea567c8ca45a3992b50a240f08f47",
        "tracklist": "https://api.deezer.com/album/176784522/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 1063957682,
      "title": "Dynamite",
      "title_short": "Dynamite",
      "title_version": "",
      "link": "https://www.deezer.com/track/1063957682",
      "duration": 199,
      "rank": 100000,
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1788c4b527cc1e76ef671e0b77d1d2c9-7.mp3",
      "md5_image": "7ad472558771ab24d3b31bec0b5f3f18",
      "position": 2,
      "artist": {
        "id": 6982223,
        "name": "BTS",
        "link": "https://www.deezer.com/artist/6982223",
        "picture": "https://api.deezer.com/artist/6982223/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/8cf015c67f3b92b5b10a9e8fd73dad22/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/8cf015c67f3b92b5b10a9e8fd73dad22/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/8cf015c67f3b92b5b10a9e8fd73dad22/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/8cf015c67f3b92b5b10a9e8fd73dad22/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 169879342,
        "title": "Dynamite (DayTime Version)",
        "cover": "https://api.deezer.com/album/169879342/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/7ad472558771ab24d3b31bec0b5f3f18/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/7ad472558771ab24d3b31bec0b5f3f18/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/7ad472558771ab24d3b31bec0b5f3f18/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/7ad472558771ab24d3b31bec0b5f3f18/1000x1000-000000-80-0-0.jpg",
        "md5_image": "7ad472558771ab24d3b31bec0b5f3f18",
        "tracklist": "https://api.deezer.com/album/169879342/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": 952261162,
      "title": "eight(Prod.&Feat. SUGA of BTS)",
      "title_short": "eight(Prod.&Feat. SUGA of BTS)",
      "title_version": "",
      "link": "https://www.deezer.com/track/952261162",
      "duration": 167,
      "rank": 699226,
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-d.dzcdn.net/stream/c-d46c9e66633d0b50083947b970b9f1d3-6.mp3",
      "md5_image": "a4d94ab6bc4c121c1197df91c7779024",
      "position": 3,
      "artist": {
        "id": 2810121,
        "name": "IU",
        "link": "https://www.deezer.com/artist/2810121",
        "picture": "https://api.deezer.com/artist/2810121/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7bfe4248d93dfcd46fb764dba317071b/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7bfe4248d93dfcd46fb764dba317071b/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7bfe4248d93dfcd46fb764dba317071b/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7bfe4248d93dfcd46fb764dba317071b/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/2810121/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 146579982,
        "title": "eight",
        "cover": "https://api.deezer.com/album/146579982/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a4d94ab6bc4c121c1197df91c7779024/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a4d94ab6bc4c121c1197df91c7779024/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a4d94ab6bc4c121c1197df91c7779024/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a4d94ab6bc4c121c1197df91c7779024/1000x1000-000000-80-0-0.jpg",
        "md5_image": "a4d94ab6bc4c121c1197df91c7779024",
        "tracklist": "https://api.deezer.com/album/146579982/tracks",
        "type": "album"
      },
      "type": "track"
    }
  ],
  "total": 10
}

class App extends Component {

  componentDidMount() {
    // axios.get('https://api.deezer.com/chart/tracks').then(res => {
    //   console.log(res);
    // })
  }

  render() {
    const topTracks = tempData.data;

    return (
      <div className={classes.App}>
        <Header />
        
        <div className={classes.Layout}>
          <div className={classes.Left}>
            <Sidebar />
          </div>

          <div className={classes.Right}>
            <Main topTracks={topTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

