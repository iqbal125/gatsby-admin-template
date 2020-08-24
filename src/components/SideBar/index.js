import React, { useState } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

const SideBar = ({ props }) => {
  const [show, setShow] = useState(false);

  const accordianHandler = () => (show ? setShow(false) : setShow(true));

  return (
    <div className={styles.side_drawer_full}>
      <div className={styles.side_drawer_links}>
        <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.accordian_container}>
          <div className={styles.accordian_header} onClick={accordianHandler}>
            <div>Show Links</div>
          </div>
          {show && (
            <div className={styles.accordian_links}>
              <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
                Create Task
              </div>
              <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
                List Tasks
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        Settings
      </div>
    </div>
  );
};

export default SideBar;
