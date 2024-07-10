import classNames from 'classnames/bind';
import styles from './index.module.scss';

// 从 autoImport 的 index.js 直接导入所有组件
import * as Components from 'components/autoImport';

const cn = classNames.bind(styles);

const arr = Object.keys(Components).map((key) => {
  const Component = Components[key];
  return <Component key={key} />;
});

function Page() {
  return (
    <div className={cn('page')}>{arr.length > 0 ? arr : '组件列表为空'}</div>
  );
}

export default Page;
