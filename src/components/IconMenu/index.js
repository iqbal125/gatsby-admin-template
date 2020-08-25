import React, { useState } from 'react';
import styles from './icon_menu.module.css';

const IconMenu = props => {
  const { AppLink, openID, setOpenID } = props;
  const { id, icon, header, accordian_links } = AppLink;

  return (
    <div className={styles.container}>
      <div onClick={() => setOpenID(id)} className={styles.side_items}>
        {icon()}
      </div>
      {id === openID && (
        <div className={styles.side_menu}>
          <div>{header}</div>
          <div>
            {accordian_links.map(acc_link => (
              <div>{acc_link.link}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconMenu;
