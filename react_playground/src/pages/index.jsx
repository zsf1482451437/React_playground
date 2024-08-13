import React from 'react';

import CardSection from 'sections/cardSection';

import profile from 'assets/img/profile.jpg';

const cardSectionData = {
  title: '组件',
  description: '“开箱即用”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  cardsData: [
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

cardSectionData.cardsData = cardSectionData?.cardsData?.map((item) => {
  return {
    ...item,
    category: 'Component',
    author: { avatar: profile },
  };
});

const Index = () => {
  return (
    <>
      <CardSection {...cardSectionData} />
    </>
  );
};

export default Index;
