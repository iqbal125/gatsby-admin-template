import React, { useState } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

import AppLinkHeader from '../AppLinkHeader';

const SideBar = props => {
  const { AppLinks } = props;

  return (
    <div className={styles.side_drawer_full}>
      <div className={styles.side_drawer_links}>
        <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
          <img src={logo} alt="" />
        </div>
        {AppLinks.map(AppLink => (
          <AppLinkHeader AppLink={AppLink} />
        ))}
      </div>
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        Settings
      </div>
    </div>
  );
};

export default SideBar;
