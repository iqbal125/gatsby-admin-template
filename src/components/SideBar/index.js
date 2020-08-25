import React, { useState } from 'react';
import styles from './sidebar.module.css';
import logo from '../../../static/logos/favicon.ico';
import { navigate } from 'gatsby';

const AppLinks = [
  {
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  },
  {
    header: 'Show Links',
    accordian_links: [
      { link: 'Create Task', url: '/app/createtask' },
      { link: 'List Task', url: '/app/listtasks' }
    ]
  }
];

const SideBar = ({ props }) => {
  const [show, setShow] = useState(false);

  const accordianHandler = () => (show ? setShow(false) : setShow(true));

  return (
    <div className={styles.side_drawer_full}>
      <div className={styles.side_drawer_links}>
        <div className={styles.app_logo} onClick={() => navigate('/app/dashboard')}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.accordian_container}>
          {AppLinks.map(link => (
            <div>
              <div className={styles.accordian_header} onClick={accordianHandler}>
                <div>{link.header}</div>
              </div>
              {show && (
                <div className={styles.accordian_links}>
                  {link.accordian_links.map(accLink => (
                    <div className={styles.side_items} onClick={() => navigate(`${accLink.url}`)}>
                      {accLink.link}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.side_items_settings} onClick={() => navigate('/app/task')}>
        Settings
      </div>
    </div>
  );
};

export default SideBar;
