import React, { useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import styles from './routes.module.css';

import Dashboard from '../Dashboard';
import CreateTask from '../CreateTask';
import ListTasks from '../ListTasks';

import SideBar from '../SideBar';
import SideBarIcons from '../SideBarIcons';

import TopHeader from '../TopHeader';
import AppHeader from '../AppHeader';
import AppHeaderFull from '../AppHeaderFull';

import { FiArrowRightCircle } from 'react-icons/fi';
import { FiDisc } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';

const AppLinks = [
  {
    id: 1,
    header: 'Show Links',
    url: '/app/createtask1',
    icon: FiArrowRightCircle
  },
  {
    id: 2,
    header: 'Show Links 2',
    url: '/app/createtask2',
    icon: FiDisc
  },
  {
    id: 3,
    header: 'Show Links 3',
    url: '/app/createtask3',
    icon: FiEdit
  }
];

const Routes = () => {
  const [isSidebar, toggleSidebar] = useState(false);
  const sidebarHandler = () => (isSidebar ? toggleSidebar(false) : toggleSidebar(true));

  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isTokenValid()) {
      navigate('/login');
      return null;
    } else {
      return <Component {...rest} />;
    }
  };

  return (
    <div className={isSidebar ? styles.main_with_sidebar : styles.main_small_sidebar}>
      {isSidebar ? (
        <div className={styles.side_bar}>
          <SideBar AppLinks={AppLinks} />
        </div>
      ) : (
        <div className={styles.side_bar_icons}>
          <SideBarIcons AppLinks={AppLinks} />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.top_nav}>
          <TopHeader AppLinks={AppLinks} />
        </div>
        <AppHeader props={{ isSidebar, sidebarHandler }} />

        <Router>
          {/*<PrivateRoute path="/app/profile" component={Profile} />*/}
          <Dashboard path="/app/dashboard" />
          <CreateTask path="/app/createtask" />
          <ListTasks path="/app/listtasks" />
        </Router>
      </div>
    </div>
  );
};

export default Routes;
