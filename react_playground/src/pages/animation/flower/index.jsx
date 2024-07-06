import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import createFireEffect from 'animation/fire/flower';

const cn = classNames.bind(styles);

const Animation = () => {
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

export default Animation;
