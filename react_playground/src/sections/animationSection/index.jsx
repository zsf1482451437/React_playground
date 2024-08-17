import React from 'react';

import Section from 'components/section';
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
    },
    {
      title: '火焰',
      tags: ['flame'],
      path: DETAIL.FLAME,
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
