import React, { useState } from 'react';
import styles from './icon_menu.module.css';

const IconMenu = props => {
  const { AppLink } = props;
  const { icon, header, accordian_links } = AppLink;
  const [navLinks, toggleNavLinks] = useState(false);
  const navLinksHandler = () => (navLinks ? toggleNavLinks(false) : toggleNavLinks(true));

  return (
    <div className={styles.container}>
      <div onClick={navLinksHandler} className={styles.side_items}>
        {icon()}
      </div>
      {navLinks && (
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
