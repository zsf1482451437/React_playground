import React from 'react';

import Section from 'components/section';
import DETAIL from 'constants/detail';

import profile from 'assets/img/profile.jpg';

const componentSectionData = {
  title: '组件',
  description: '“开箱即用”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  sectionData: [
    {
      title: '卡片',
      tags: ['card'],
      path: DETAIL.CARD,
    },
    {
      title: 'github角标',
      tags: ['github'],
      path: DETAIL.GITHUB,
    },
    {
      title: '页头',
      tags: ['navigation'],
      path: DETAIL.HEADER,
    },
    {
      title: '加载状态',
      tags: ['loading'],
      path: DETAIL.LOADING,
    },
    {
      title: 'React logo',
      tags: ['logo'],
      path: DETAIL.LOGO,
    },
  ],
};

componentSectionData.sectionData = componentSectionData?.sectionData?.map(
  (item) => {
    return {
      ...item,
      category: 'Component',
      author: { avatar: profile },
    };
  }
);

const ComponentSection = () => {
  return (
    <>
      <Section {...componentSectionData} />
    </>
  );
};

export default ComponentSection;
