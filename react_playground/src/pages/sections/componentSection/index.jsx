import React from 'react';

import Section from 'components/section';
import { Card, Code, GithubCorner, Header, Loading, ReactLogo } from 'utils/categoryExport';
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
      preview: <Card />,
    },
    {
      title: '代码块',
      tags: ['code'],
      path: DETAIL.CODE,
      preview: <Code />,
    },
    {
      title: 'github角标',
      tags: ['github'],
      path: DETAIL.GITHUB,
      preview: <GithubCorner />,
    },
    {
      title: '页头',
      tags: ['navigation'],
      path: DETAIL.HEADER,
      preview: <Header />,
    },
    {
      title: '加载状态',
      tags: ['loading'],
      path: DETAIL.LOADING,
      preview: <Loading />,
    },
    {
      title: 'React logo',
      tags: ['logo'],
      path: DETAIL.LOGO,
      preview: <ReactLogo />,
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
