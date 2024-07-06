import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
// import styles from './index.module.scss';

import { init, handleResize } from 'animation/stars/star';

// const cn = classNames.bind(styles);

const Animation = () => {
  useEffect(() => {
    window.addEventListener('load', init);
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('load', init);
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);

  return (
    <div>
      <div id="world"></div>
    </div>
  );
};

export default Animation;
