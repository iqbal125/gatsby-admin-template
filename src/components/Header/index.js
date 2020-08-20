import React, { useState, useContext } from 'react';
import styles from './header.module.css';

import { Link } from 'gatsby';
import AuthContext from '../../utils/auth_context';

import logo from '../../../static/logos/favicon.ico';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Header = ({ props }) => {
  const [navLinks, toggleNavLinks] = useState(false);
  const [accountLinks, toggleAccountLinks] = useState(false);

  const context = useContext(AuthContext);
  const { uri } = props;

  const isHome = uri === '/';

  const navLinksHandler = () => (navLinks ? toggleNavLinks(false) : toggleNavLinks(true));

  const menuHandler = () => (accountLinks ? toggleAccountLinks(false) : toggleAccountLinks(true));

  return (
    <>
      <header className={isHome ? '' : styles.top_header_not_home}>
        <div className={isHome ? styles.header_home : styles.header_not_home}>
          <div className={styles.left_header}>
            {/* Desktop */}
            <div className={styles.desktop_logo}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* Mobile */}
            <div className={styles.menu_icon}>
              {!navLinks ? (
                <div onClick={navLinksHandler} className={styles.hamburger}>
                  <GiHamburgerMenu />
                </div>
              ) : (
                <div onClick={navLinksHandler} className={styles.close_button}>
                  <AiOutlineClose />
                </div>
              )}
              {/* Mobile Hamburger Links*/}
              {navLinks && (
                <>
                  <div className={isHome ? styles.dropdown_home : styles.dropdown_not_home}>
                    <Link
                      to="/about"
                      className={styles.header_links_mobile}
                      activeClassName={styles.header_link_active}
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className={styles.header_links_mobile}
                      activeClassName={styles.header_link_active}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/services"
                      className={styles.header_links_mobile}
                      activeClassName={styles.header_link_active}
                    >
                      Services
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.mid_header}>
            {/* Desktop */}
            <div className={styles.desktop_links}>
              <Link
                to="/about"
                className={styles.header_link}
                activeClassName={styles.header_link_active}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={styles.header_link}
                activeClassName={styles.header_link_active}
              >
                Contact
              </Link>
              <Link
                to="/services"
                className={styles.header_link}
                activeClassName={styles.header_link_active}
              >
                Services
              </Link>
            </div>
            {/* Mobile */}
            <div className={styles.mobile_logo}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className={styles.right_header}>
            {/* Desktop and Mobile */}
            {!context.authState.isAuthenticated && (
              <Link to="/login" className={styles.login_button}>
                Login
              </Link>
            )}
            {context.authState.isAuthenticated && (
              <div className={styles.header_photo_wrap}>
                {context.authState.user.photo ? (
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
                    <div>Item 1 </div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
