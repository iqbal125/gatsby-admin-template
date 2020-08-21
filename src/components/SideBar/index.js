import React, { useEffect, useContext, useRef } from 'react';
import styles from './sidebar.module.css';

import { navigate } from 'gatsby';

const SideBar = props => {
  return (
    <div className={styles.side_drawer}>
      {/*<div>Logo</div>*/}
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        Create Task
      </div>
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        List Tasks
      </div>
      <div className={styles.side_items} onClick={() => navigate('/app/task')}>
        Settings
      </div>
    </div>
  );
};

export default SideBar;
