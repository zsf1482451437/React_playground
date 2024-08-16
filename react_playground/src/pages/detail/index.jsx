import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import common_data from './config';

const cn = classNames.bind(styles);

const Detail = () => {
  const location = useLocation();
  const [component, setComponent] = useState('暂无内容');
  useEffect(() => {
    const path = location.pathname;
    const data = common_data.find((item) => item.path === path);
    if (data?.component) setComponent(data.component);
  }, [location]);
  return <div className={cn('container')}>{component}</div>;
};

export default Detail;
