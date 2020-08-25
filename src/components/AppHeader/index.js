import React, { useState, useContext } from 'react';
import styles from './appheader.module.css';

import { Link } from 'gatsby';
import AuthContext from '../../utils/auth_context';

import logo from '../../../static/logos/favicon.ico';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const AppHeader = ({ props }) => {
  const [navLinks, toggleNavLinks] = useState(false);
  const [accountLinks, toggleAccountLinks] = useState(false);

  const { isSidebar, sidebarHandler } = props;

  const context = useContext(AuthContext);

  const photo = context.authState.user ? context.authState.user.photo : null;

  const navLinksHandler = () => (navLinks ? toggleNavLinks(false) : toggleNavLinks(true));

  const menuHandler = () => (accountLinks ? toggleAccountLinks(false) : toggleAccountLinks(true));

  return (
    <>
      <header className={styles.top_header_not_home}>
        <div className={styles.header_home}>
          <div className={styles.left_header}>
            {/* Desktop */}
            <div className={styles.side_bar_menu}>
              {!isSidebar ? (
                <div onClick={sidebarHandler} className={styles.hamburger}>
                  <GiHamburgerMenu />
                </div>
              ) : (
                <div onClick={sidebarHandler} className={styles.close_button}>
                  <AiOutlineClose />
                </div>
              )}
            </div>

            {/* Mobile */}
          </div>

          <div className={styles.mid_header}>
            {/* Desktop */}

            {/* Mobile */}
          </div>

          <div className={styles.right_header}>
            {/* Desktop and Mobile */}(
            <div className={styles.header_photo_wrap}>
              {photo ? (
                <img
                  src={context.authState.user.photo}
                  onClick={menuHandler}
                  className={styles.header_photo}
                  alt="Not Found"
                />
              ) : (
                <MdAccountCircle className={styles.header_photo} onClick={menuHandler} />
              )}
              {accountLinks && (
                <div className={styles.account_dropdown}>
                  <div className={styles.account_dropdown_item}>Account</div>

                  <div className={styles.account_dropdown_item}>Settings</div>
                  <div className={styles.account_dropdown_item}>Logout</div>
                </div>
              )}
            </div>
            )
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
