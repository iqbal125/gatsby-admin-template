import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from './sidebaricons.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';
import { VscSettingsGear } from 'react-icons/vsc';
import IconMenu from '../IconMenu';

const SideBarIcons = props => {
  const { AppLinks } = props;
  const [openID, setOpenID] = useState(null);

  return (
    <div className={styles.side_drawer}>
      <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
        <img src={logo} alt="" />
      </div>
      {AppLinks.map(AppLink => (
        <IconMenu openID={openID} setOpenID={setOpenID} AppLink={AppLink} />
      ))}
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        <VscSettingsGear />
      </div>
    </div>
  );
};

export default SideBarIcons;
