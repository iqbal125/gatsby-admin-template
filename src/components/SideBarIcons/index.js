import React, { useEffect, useContext, useRef } from 'react';
import styles from './sidebaricons.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';
import { VscSettingsGear } from 'react-icons/vsc';

import IconMenu from '../IconMenu';

const SideBarIcons = props => {
  const { AppLinks } = props;
  console.log(AppLinks);

  return (
    <div className={styles.side_drawer}>
      <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
        <img src={logo} alt="" />
      </div>
      {AppLinks.map(AppLink => (
        <IconMenu AppLink={AppLink} />
      ))}
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        <VscSettingsGear />
      </div>
    </div>
  );
};

export default SideBarIcons;
