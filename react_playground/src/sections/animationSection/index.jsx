import React from 'react';

import Section from 'components/section';
import Particle from 'pages/animation/particle';
import Flame from 'pages/animation/flame';
import DETAIL from 'constants/detail';

import profile from 'assets/img/profile.jpg';

const animationSectionData = {
  title: '动画',
  description: '“有点神奇”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  sectionData: [
    {
      title: '莲花粒子',
      tags: ['particle'],
      path: DETAIL.PARTICLE,
      preview: <Particle />,
    },
    {
      title: '火焰',
      tags: ['flame'],
      path: DETAIL.FLAME,
      preview: <Flame />,
    },
  ],
};

animationSectionData.sectionData = animationSectionData?.sectionData?.map(
  (item) => {
    return {
      ...item,
      category: 'Animation',
      author: { avatar: profile },
    };
  }
);

const AnimationSection = () => {
  return (
    <>
      <Section {...animationSectionData} />
    </>
  );
};

export default AnimationSection;
