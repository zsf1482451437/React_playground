import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import createFireEffect from 'animation/particle';

const cn = classNames.bind(styles);

const Particle = () => {
  useEffect(() => {
    const clear = createFireEffect({
      color: 0xff0000,
      size: 0.7,
      particleCount: 1000,
      rotationSpeed: 0.02,
    });
    return () => clear();
  }, []);
  return <div id="particle" className={cn('particle')}></div>;
};

Particle.type = 'animation';

export default Particle;
