import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const EasyCard = ({ category, title, tags, author }) => {
  return (
    <article className={cn('card')}>
      <div className={cn('content')}>
        <span className={cn('category')}>{category}</span>
        <h2 className={cn('title')}>{title}</h2>
        <div className={cn('meta')}>
          {tags.map((tag, index) => (
            <span key={index} className={cn('tag')}>
              {tag}
            </span>
          ))}
          {/* <img
            src={author.avatar}
            alt={author.name}
            className={cn('author-avatar')}
          /> */}
          <span className={cn('author-name')}>{author.name}</span>
        </div>
      </div>
    </article>
  );
};

EasyCard.type = 'component';

export default EasyCard;
