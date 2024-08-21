import React from 'react';

import Section from 'components/section';
import Card from 'components/base/Card';
import GithubCorner from 'components/base/GithubCorner';
import Header from 'components/base/Header';
import Loading from 'components/base/Loading';
import ReactLogo from 'components/base/ReactLogo';
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
