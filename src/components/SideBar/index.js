import React, { useState } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';
import Accordian from '../Accordian';

const AppLinks = [
  {
    id: 1,
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  },
  {
    id: 2,
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  }
];

const SideBar = ({ props }) => {
  return (
    <div className={styles.side_drawer_full}>
      <div className={styles.side_drawer_links}>
        <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
          <img src={logo} alt="" />
        </div>
        {AppLinks.map(AppLink => (
          <Accordian AppLink={AppLink} />
        ))}
      </div>
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        Settings
      </div>
    </div>
  );
};

export default SideBar;
