import React, { useState, useContext } from 'react';
import styles from './applinkheader.module.css';
import { navigate } from 'gatsby';

const AppLinkHeader = props => {
  const { AppLink } = props;
  const { id, header, url } = AppLink;

  return (
    <div key={id} className={styles.accordian_container}>
      <div>
        <div className={styles.accordian_header} onClick={() => navigate(url)}>
          <div>{header}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLinkHeader;
