import classNames from 'classnames/bind';
import styles from './index.module.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 从 autoImport 的 index.js 直接导入所有组件
import * as Components from 'components/autoImport';
import Index from 'pages';
import Detail from 'pages/detail';
import ROUTES from 'constants/routes';

const cn = classNames.bind(styles);

const renderComponents = (arr) =>
  arr.length !== 0
    ? arr.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))
    : '暂无内容';

// 不同页面
const categorizedPages = {};

Object.keys(ROUTES).forEach((key) => {
  categorizedPages[key.toLowerCase()] = [];
});

// 遍历组件并根据静态类型信息进行分类
Object.keys(Components).forEach((key) => {
  const Component = Components[key];
  const type = Component.type;

  if (type && categorizedPages[type]) {
    categorizedPages[type].push(<Component key={key} />);
  }
});

const RouterComponent = () => {
  return (
    <div className={cn('page')}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/detail/*" element={<Detail />} />
          {Object.keys(categorizedPages).map((type, index) => (
            <Route
              key={type + index}
              path={type}
              element={renderComponents(categorizedPages[type])}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default RouterComponent;
