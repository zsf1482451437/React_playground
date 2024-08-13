import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import EasyCard from 'components/base/Card/EasyCard';

const cn = classNames.bind(styles);

const Section = ({ title, description, url, author, sectionData }) => {
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
        {sectionData.map((card, index) => (
          <EasyCard key={index} {...card} />
        ))}
      </div>
      <div className={cn('footer')}></div>
    </div>
  );
};

export default Section;
