import classNames from 'classnames/bind';
import styles from './index.module.scss';

import logo from 'assets/svg/logo.svg';

const cn = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cn('app_header')}>
      <img src={logo} className={cn('app_logo')} alt="logo" />
    </header>
  );
};

export default Header;
