import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import createFireEffect from 'animation/unknow';

const cn = classNames.bind(styles);

const Unknow = () => {
  useEffect(() => {
    createFireEffect({
      color: 0xff0000,
      size: 0.7,
      particleCount: 1000,
      rotationSpeed: 0.02,
    });
  }, []);
  return (
    <div>
      <div className={cn('flame')}></div>
    </div>
  );
};

Unknow.type = 'animation';

export default Unknow;
