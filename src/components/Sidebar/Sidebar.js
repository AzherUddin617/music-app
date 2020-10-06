import React from 'react';
import classes from './Sidebar.module.scss';
import * as rutePaths from '../../global/rute-paths';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMusic,
  faUser,
  faCompactDisc,
  faListAlt
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { name: 'Discover', path: rutePaths.ROOT_PATH, logo: faHome },
  { name: 'Songs', path: rutePaths.SONGS_PATH, logo: faMusic },
  { name: 'Albums', path: rutePaths.ALBUMS_PATH, logo: faCompactDisc },
  { name: 'Artists', path: rutePaths.ARTISTS_PATH, logo: faUser },
  { name: 'Playlists', path: rutePaths.PLAYLISTS_PATH, logo: faListAlt },
];

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <nav className={classes.Nav}>
        <ul className={classes.List}>
          {navItems.map((item, i) => {
            return (
              <li className={classes.Item} key={i}>
                <div className={classes.Icon}>
                  <FontAwesomeIcon icon={item.logo} color='inherit' fontSize="inherit" />
                </div>

                <p className={classes.Text}>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;