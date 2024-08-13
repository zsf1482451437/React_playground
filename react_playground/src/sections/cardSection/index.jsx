import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import EasyCard from 'components/base/Card/EasyCard';

const cn = classNames.bind(styles);

const CardSection = ({ title, description, url, author, cardsData }) => {
  return (
    <div className={cn('container')}>
      <div className={cn('header')}>
        <h2>{title}</h2>
        <p className={cn('description')}>{description}</p>
        <p>
          <a href={url}>作者：{author}</a>
        </p>
      </div>
      <div className={cn('list')}>
        {cardsData.map((card, index) => (
          <EasyCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
