import React, { useState, useRef, useEffect } from 'react';
import styles from './icon_menu.module.css';
import { Link } from 'gatsby';

const IconMenu = props => {
  const { AppLink, openID, setOpenID } = props;
  const { id, icon, header, url } = AppLink;
  const ref = useRef(null);

  return (
    <div
      onMouseOver={() => setOpenID(id)}
      onMouseLeave={() => setOpenID(null)}
      className={styles.container}
    >
      <div className={styles.icon_container}>
        <Link to={url} className={styles.icons} activeClassName={styles.icon_active}>
          {icon()}
        </Link>
      </div>
      {id === openID && (
        <div ref={ref} className={styles.side_menu}>
          <div className={styles.side_menu_header}>{header}</div>
        </div>
      )}
    </div>
  );
};

export default IconMenu;
