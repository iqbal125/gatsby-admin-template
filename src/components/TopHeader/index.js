import React, { useState } from 'react';
import styles from './topheader.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const AppLinks = [
  {
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  }
];

const TopHeader = ({ props }) => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const accordianHandler = () => (show ? setShow(false) : setShow(true));

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
              {AppLinks.map(link => (
                <div>
                  <div className={styles.accordian_header} onClick={accordianHandler}>
                    <div>{link.header}</div>
                  </div>
                  {show && (
                    <div className={styles.accordian_links}>
                      {link.accordian_links.map(accLink => (
                        <div
                          className={styles.side_items}
                          onClick={() => navigate(`${accLink.url}`)}
                        >
                          {accLink.link}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
