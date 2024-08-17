import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const Flame = () => {
  return (
    <div>
      <div className={cn('flame')}></div>
    </div>
  );
};

Flame.type = 'animation';

export default Flame;
