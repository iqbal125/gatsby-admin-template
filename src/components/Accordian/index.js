import React, { useState, useContext } from 'react';
import styles from './accordian.module.css';
import { navigate } from 'gatsby';

const Accordian = props => {
  const [show, setShow] = useState(false);
  const accordianHandler = () => (show ? setShow(false) : setShow(true));

  const { AppLink } = props;
  const { id, header, accordian_links } = AppLink;

  return (
    <div className={styles.accordian_container}>
      <div key={id}>
        <div className={styles.accordian_header} onClick={accordianHandler}>
          <div>{header}</div>
        </div>
        {show && (
          <div className={styles.accordian_links}>
            {accordian_links.map(accLink => (
              <div className={styles.side_items} onClick={() => navigate(`${accLink.url}`)}>
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
