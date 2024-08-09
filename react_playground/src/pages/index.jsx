import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 从 autoImport 的 index.js 直接导入所有组件
import * as Components from 'components/autoImport';
import DesktopHeader from 'components/base/Header';

const cn = classNames.bind(styles);

const arr = Object.keys(Components).map((key) => {
  const Component = Components[key];
  return <Component key={key} />;
});

function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopHeader />} />
        <Route
          path="*"
          element={
            <div className={cn('page')}>
              {arr.length > 0 ? arr : '组件列表为空'}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Page;
