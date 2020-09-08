import React from 'react';
import styles from './applinkheader.module.css';
import { navigate, Link } from 'gatsby';

const AppLinkHeader = props => {
  const { AppLink } = props;
  const { id, header, url } = AppLink;

  return (
    <div key={id} className={styles.app_link_container}>
      <Link to={url} className={styles.app_link_header} activeClassName={styles.header_link_active}>
        {header}
      </Link>
    </div>
  );
};

export default AppLinkHeader;
