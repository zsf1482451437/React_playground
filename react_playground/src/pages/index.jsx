import classNames from 'classnames/bind';
import styles from './index.module.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 从 autoImport 的 index.js 直接导入所有组件
import * as Components from 'components/autoImport';

const cn = classNames.bind(styles);

const renderComponents = (arr) =>
  arr.length !== 0
    ? arr.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))
    : '暂无内容';

// 不同页面
const categorizedComponents = {
  component: [],
  layout: [],
  page: [],
  other: [],
  animation: [],
  network: [],
  store: [],
  utils: [],
};

// 遍历组件并根据静态类型信息进行分类
Object.keys(Components).forEach((key) => {
  const Component = Components[key];
  const type = Component.type;

  if (type && categorizedComponents[type]) {
    categorizedComponents[type].push(<Component key={key} />);
  }
});

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className={cn('page')}>
              {renderComponents(categorizedComponents.component)}
            </div>
          }
        />
        {Object.keys(categorizedComponents).map((type, index) => (
          <Route
            key={type + index}
            path={type}
            element={
              <div className={cn('page')}>
                {renderComponents(categorizedComponents[type])}
              </div>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Page;
