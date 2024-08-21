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
      tags: ['弹性布局'],
    },
    {
      title: 'Gird',
      tags: ['网格布局'],
    },
    {
      title: '砖体',
      tags: ['瀑布流'],
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
