import React, { useState, useRef, useEffect } from 'react';
import styles from './icon_menu.module.css';
import { navigate } from 'gatsby';

const IconMenu = props => {
  const { AppLink, openID, setOpenID } = props;
  const { id, icon, header, url } = AppLink;
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (openID === id) {
        setOpenID(null);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setOpenID(id)} className={styles.icons}>
        {icon()}
      </div>
      {id === openID && (
        <div ref={ref} className={styles.side_menu}>
          <div onClick={() => navigate(`${url}`)} className={styles.side_menu_header}>
            {header}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconMenu;
