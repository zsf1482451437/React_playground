import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const EasyCard = ({ category, title, tags, author, preview, handleClick }) => {
  return (
    <article className={cn('card')} onClick={() => handleClick()}>
      <div className={cn('content')}>
        <span className={cn('category')}>{category}</span>
        <h3 className={cn('title')}>{title}</h3>
        <div className={cn('tags')}>
          {tags.map((tag, index) => (
            <a key={index} href="/">
              {tag}
            </a>
          ))}
        </div>
        <div className={cn('author_row')}>
          <img src={author.avatar} alt={'头像'} className={cn('avatar')} />
        </div>
      </div>
      <div className={cn('preview')}>{preview}</div>
    </article>
  );
};

EasyCard.type = 'component';

export default EasyCard;
