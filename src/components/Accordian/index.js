import React, { useState, useContext } from 'react';
import styles from './accordian.module.css';
import { navigate } from 'gatsby';

/*
  Example of object for this component
  {
    id: 3,
    header: 'Show Links 3',
    accordian_links: [
      { link_id: 5, link: 'Create Task', url: '/app/createtask' },
      { link_id: 6, link: 'List Task', url: '/app/listtasks' }
    ],
    icon: FiEdit
  }
*/

const Accordian = props => {
  const [show, setShow] = useState(false);
  const accordianHandler = () => (show ? setShow(false) : setShow(true));

  const { AppLink } = props;
  const { id, header, accordian_links } = AppLink;

  return (
    <div className={styles.accordian_container}>
      <div>
        <div className={styles.accordian_header} onClick={accordianHandler}>
          <div>{header}</div>
        </div>
        {show && (
          <div>
            {accordian_links.map(accLink => (
              <div
                key={accLink.link_id}
                className={styles.accordian_links}
                onClick={() => navigate(`${accLink.url}`)}
              >
                {accLink.link}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
