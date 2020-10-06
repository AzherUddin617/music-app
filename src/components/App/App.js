import React, { Component } from 'react';
import axios from 'axios';

import classes from './App.module.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {

  componentDidMount() {
    // axios.get('https://api.deezer.com/chart/tracks').then(res => {
    //   console.log(res);
    // })
  }

  render() {
    return (
      <div className={classes.App}>
        <Header />
        
        <div className={classes.Layout}>
          <div className={classes.Left}>
            <Sidebar />
          </div>

          <div className={classes.Right}>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

