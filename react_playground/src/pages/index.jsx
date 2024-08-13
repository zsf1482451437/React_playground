import React from 'react';

import ComponentSection from 'sections/componentSection';

import profile from 'assets/img/profile.jpg';

const componentSectionData = {
  title: '组件',
  description: '“开箱即用”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  componentData: [
    {
      title: '卡片',
      tags: ['card'],
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

componentSectionData.componentData = componentSectionData?.componentData?.map(
  (item) => {
    return {
      ...item,
      category: 'Component',
      author: { avatar: profile },
    };
  }
);

const Index = () => {
  return (
    <>
      <ComponentSection {...componentSectionData} />
    </>
  );
};

export default Index;
