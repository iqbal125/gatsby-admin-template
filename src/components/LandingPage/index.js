import React, { useRef, useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import SocialBar from '../SocialBar';
import 'html5-device-mockups/dist/device-mockups.css';
import 'html5-device-mockups/dist/device-mockups.min.css';
import { IPhone5 } from 'react-device-mockups';

//illustrations
import image1 from '../../../static/uploads/coding_.svg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/code_development_.svg';
import image6 from '../../../static/uploads/Untitled Project.gif';

import styles from './home.module.css';

const Home = () => {
  const intersectTargetFeat1 = useRef(null);
  const intersectTargetFeat2 = useRef(null);
  const [feat1Intersect, setFeat1] = useState(false);
  const [feat2Intersect, setFeat2] = useState(false);

  const toLoginPage = () => {
    navigate('/app/login');
  };

  const toAboutPage = () => {
    navigate('/about');
  };

  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const callback = list => {
      list.forEach(entry => {
        let isFeat1 = entry.target.className.includes('feature1');
        let isFeat2 = entry.target.className.includes('feature2');

        if (entry.isIntersecting && isFeat1) {
          setFeat1(true);
        }
        if (entry.isIntersecting && isFeat2) {
          setFeat2(true);
        }
      });
    };
    const observerScroll = new IntersectionObserver(callback, opts);

    observerScroll.observe(intersectTargetFeat1.current);
    observerScroll.observe(intersectTargetFeat2.current);
  }, []);

  return (
    <div>
      <div className={styles.landing_hero}>
        <h1 className={styles.value_prop}>
          Main Value Prop Main Value Prop Main Value Prop Main Value Prop{' '}
        </h1>
        <div>
          <img className={styles.hero_illustration} src={image3} alt="" />
        </div>
      </div>
      <div className={styles.wave_bottom_hero}>
        <img src={image2} alt="" />
      </div>

      <div className={styles.feature1}>
        <div className={styles.feature1_text}>
          <h2>Feature #1</h2>
          <p>Explanation of Feature</p>
          <button className={styles.find_out_more_button} onClick={toAboutPage}>
            Find Out More
          </button>
        </div>
        <img
          ref={intersectTargetFeat1}
          className={feat1Intersect ? styles.feature1_img : styles.feature1_img_none}
          src={image1}
          alt=""
        />
      </div>
      <div ref={intersectTargetFeat2} className={styles.feature2}>
        <img
          className={feat2Intersect ? styles.feature2_img : styles.feature2_img_none}
          src={image5}
          alt=""
        />

        <div className={styles.feature2_text}>
          <h2>Feature #2</h2>
          <p>Explanation of Feature</p>
        </div>
      </div>
      <div className={styles.rowMocks}>
        <div className={styles.rowMocksText}>
          <h1>Some Heading about ease of use of app </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        {/*<div className="device-wrapper">
            <div
              className="device"
              data-device="iPhone6"
              data-orientation="portrait"
              data-color="black"
            >
              <div className="screen">
                <img src={image6} alt="" />
              </div>
              <div className="button"></div>
            </div>
          </div>*/}
        <div className={styles.device}>
          <IPhone5
            height={800}
            orientation="portrait"
            color="black"
            buttonProps={{
              onClick: () => alert('Home Button Clicked!')
            }}
          >
            <img src={image6} alt="" />
          </IPhone5>
        </div>
      </div>
      <div className={styles.bottom_cta_section}>
        <div className={styles.bottom_cta_text}>
          <h3>Get in touch to see how we can help you on your next project</h3>
          <button className={styles.get_started_button} onClick={toLoginPage}>
            Get Started Now
          </button>
        </div>
        <div className={styles.social_bar}>
          <h3 className={styles.social_title}> Or Connect With Us on Social Just to Chat</h3>
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
