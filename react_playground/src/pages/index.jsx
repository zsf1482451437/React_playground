import React from 'react';

import CardSection from 'sections/cardSection';

const cardSectionData = {
  title: '组件',
  description: '“开箱即用”',
  url: 'https://github.com/zsf1482451437',
  author: '平头哥',
  cardsData: [
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
    {
      category: 'Article',
      title: 'CSS Container Queries',
      tags: ['CONTAINER-QUERIES'],
      author: {
        name: 'Geoff Graham',
        avatar: 'path/to/avatar.jpg',
      },
    },
  ],
};

const Index = () => {
  return (
    <>
      <CardSection {...cardSectionData} />
    </>
  );
};

export default Index;
