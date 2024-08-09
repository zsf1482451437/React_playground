import React from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const items = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Item 1',
    description: 'Description 1',
    height: '300px',
  },
  {
    image: 'https://picsum.photos/200/250',
    title: 'Item 2',
    description: 'Description 2',
    height: '280px',
  },
  {
    image: 'https://picsum.photos/200/350',
    title: 'Item 3',
    description: 'Description 3',
    height: '330px',
  },
  {
    image: 'https://picsum.photos/200/280',
    title: 'Item 4',
    description: 'Description 4',
    height: '310px',
  },
  {
    image: 'https://picsum.photos/200/320',
    title: 'Item 5',
    description: 'Description 5',
    height: '350px',
  },
  {
    image: 'https://picsum.photos/200/270',
    title: 'Item 6',
    description: 'Description 6',
    height: '290px',
  },
  {
    image: 'https://picsum.photos/200/310',
    title: 'Item 7',
    description: 'Description 7',
    height: '320px',
  },
  {
    image: 'https://picsum.photos/200/290',
    title: 'Item 8',
    description: 'Description 8',
    height: '300px',
  },
  {
    image: 'https://picsum.photos/200/330',
    title: 'Item 9',
    description: 'Description 9',
    height: '340px',
  },
  {
    image: 'https://picsum.photos/200/260',
    title: 'Item 10',
    description: 'Description 10',
    height: '270px',
  },
  {
    image: 'https://picsum.photos/200/340',
    title: 'Item 11',
    description: 'Description 11',
    height: '360px',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Item 12',
    description: 'Description 12',
    height: '320px',
  },
];

const WaterfallLayout = () => {
  return (
    <div className={cn('waterfallContainer')}>
      {items.map((item, index) => (
        <div key={index} className={cn('waterfallItem')}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WaterfallLayout;
