import React from 'react';

import Section from 'components/section';

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
    },
    {
      title: '页头',
      tags: ['header'],
    },
    {
      title: 'github角标',
      tags: ['github'],
    },
    {
      title: '页头',
      tags: ['navigation'],
    },
    {
      title: '加载状态',
      tags: ['loading'],
    },
    {
      title: 'React logo',
      tags: ['logo'],
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
