import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const Loading = () => (
  <div className={cn('loading_wrapper')}>
    <div className={cn('loader')}>
      <div className={cn('inner', 'one')}></div>
      <div className={cn('inner', 'two')}></div>
      <div className={cn('inner', 'three')}></div>
    </div>
  </div>
);

Loading.type = 'component';

export default Loading;
