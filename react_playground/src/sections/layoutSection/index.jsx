import React from 'react';

import Section from 'components/section';

import profile from 'assets/img/profile.jpg';

const layoutSectionData = {
  title: '布局',
  description: '“网页关键”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  sectionData: [
    {
      title: 'Flex',
      tags: ['layout'],
    },
    {
      title: 'Gird',
      tags: ['layout'],
    },
    {
      title: '砖体(瀑布流)',
      tags: ['layout'],
    },
  ],
};

layoutSectionData.sectionData = layoutSectionData?.sectionData?.map((item) => {
  return {
    ...item,
    category: 'Layout',
    author: { avatar: profile },
  };
});

const LayoutSection = () => {
  return (
    <>
      <Section {...layoutSectionData} />
    </>
  );
};

export default LayoutSection;
