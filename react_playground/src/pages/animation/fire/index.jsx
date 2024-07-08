import React, { useEffect, useRef } from 'react';
// import classNames from 'classnames/bind';
// import styles from './index.module.scss';

import createThreeScene from 'animation/fire';

// const cn = classNames.bind(styles);

const Animation = () => {
  const containerRef = useRef();

  useEffect(() => {
    const { destroy } = createThreeScene(containerRef.current);

    return () => destroy();
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Animation;
