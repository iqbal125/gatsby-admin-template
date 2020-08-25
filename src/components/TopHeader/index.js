import React, { useState } from 'react';
import styles from './topheader.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

const AppLinks = [
  {
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  }
];

const TopHeader = ({ props }) => {
  return <div className={styles.top_nav}>Top Header</div>;
};

export default TopHeader;
