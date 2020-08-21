import React, { useEffect, useContext, useRef } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

const SideBar = props => {
  return (
    <div className={styles.side_drawer}>
      <div className={styles.app_logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        C
      </div>
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        L
      </div>
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        S
      </div>
    </div>
  );
};

export default SideBar;
