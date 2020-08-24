import React, { useState } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

const SideBar = ({ props }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const accordianHandler = () => (show ? setShow(false) : setShow(true));

  const accordianHandler2 = () => (show2 ? setShow2(false) : setShow2(true));

  return (
    <div className={styles.side_drawer_full}>
      <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
        <img src={logo} alt="" />
      </div>

      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}

      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}

      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}

      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}

      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}
      <div style={{ color: 'white' }} onClick={accordianHandler}>
        Show Links
      </div>
      {show && (
        <div>
          <div className={styles.side_items} onClick={() => navigate('/app/createtask')}>
            Create Task
          </div>
          <div className={styles.side_items} onClick={() => navigate('/app/listtasks')}>
            List Tasks
          </div>
        </div>
      )}

      {/*<div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        Settings
      </div>*/}
    </div>
  );
};

export default SideBar;
