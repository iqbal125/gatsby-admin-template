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

import AppLinks from './applinks';

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
    <div className={styles.main}>
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
        <div className={styles.app_header}>
          <AppHeader props={{ isSidebar, sidebarHandler }} />
        </div>

        <div className={styles.app_wrapper}>
          <Router>
            <Dashboard path="/app/dashboard" />
            <CreateTask path="/app/createtask" />
            <ListTasks path="/app/listtasks" />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Routes;
