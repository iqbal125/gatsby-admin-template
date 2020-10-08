import React, { useContext } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';
import SEO from '../SEO';
import GeneralContext from '../../utils/general_context';
import SideBar from '../SideBar';
import Headroom from 'react-headroom';

const Layout = ({ props, title, description, children }) => {
  const { sideState } = useContext(GeneralContext);
  const { isOpen } = sideState;

  const seoData = {
    title,
    description
  };

  return (
    <>
      <SEO seoData={seoData} />
      {isOpen && <SideBar />}
      <div className={isOpen ? styles.layout_fade : styles.layout}>
        <Headroom>
          <Header props={{ ...props }} />
        </Headroom>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
