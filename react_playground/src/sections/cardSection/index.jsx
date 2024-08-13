import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import EasyCard from 'components/base/Card/EasyCard';

const cardsData = [
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
  // 更多卡片数据...
];

const cn = classNames.bind(styles);

const CardSection = () => {
  return (
    <div className={cn('card_container')}>
      <div className={cn('card_header')}>
        <h2>
          ewerwr
          <br />
          ewrwer
          <br />
          affs
        </h2>
        <p>
          sdfsdf
          <br />
          <a href="https://github.com/zsf1482451437">wewr</a>
        </p>
      </div>
      <div className={cn('card_list')}>
        {cardsData.map((card, index) => (
          <EasyCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
