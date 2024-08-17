import { useEffect } from 'react';

import createFireEffect from 'animation/particle';

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
};

Particle.type = 'animation';

export default Particle;
