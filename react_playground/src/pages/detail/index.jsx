import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import CodeComponent from 'components/base/codeComponent';
import common_data from './config';
import Tab from 'components/base/Tab';

const cn = classNames.bind(styles);



const Detail = () => {
  const location = useLocation();

  const [component, setComponent] = useState('暂无内容');
  const [code, setCode] = useState('');
  const [style, setStyle] = useState('');

  useEffect(() => {
    const path = location.pathname;
    const data = common_data.find((item) => item.path === path);
    if (data?.component) {
      setComponent(data.component);
      setCode(data.code); // 假设 common_data 中有 code 字段
      setStyle(data.style);
    }
  }, [location]);

  const tabs = [
    {
      key: 'component',
      label: 'Component',
      content: <div className={cn('component_render')}>{component}</div>,
    },
    {
      key: 'code',
      label: 'Code',
      content: code && (
        <div className={cn('code_section')}>
          <h2>index.jsx</h2>
          <CodeComponent code={code} language="jsx" />
        </div>
      ),
    },
    {
      key: 'style',
      label: 'Style',
      content: style && (
        <div className={cn('code_section')}>
          <h2>index.module.scss</h2>
          <CodeComponent code={style} language="scss" />
        </div>
      ),
    },
  ];
  return (
    <div className={cn('container')}>
      <Tab tabs={tabs} />
    </div>
  );
};

export default Detail;
