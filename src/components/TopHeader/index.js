import React, { useState } from 'react';
import styles from './topheader.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Accordian from '../Accordian';

const TopHeader = props => {
  const { AppLinks } = props;
  console.log(AppLinks);
  const [isOpen, setOpen] = useState(false);

  const menuHandler = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    <div className={styles.top_nav}>
      <div className={styles.menu_icon}>
        {!isOpen ? (
          <div onClick={menuHandler} className={styles.hamburger}>
            <GiHamburgerMenu />
          </div>
        ) : (
          <div onClick={menuHandler} className={styles.close_button}>
            <AiOutlineClose />
          </div>
        )}
        {isOpen && (
          <div className={styles.menu_dropdown}>
            <div className={styles.accordian_container}>
              {AppLinks.map(AppLink => (
                <Accordian AppLink={AppLink} />
              ))}
            </div>
            <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
              Settings
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
