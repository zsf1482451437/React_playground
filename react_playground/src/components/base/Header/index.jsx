import React from 'react';
import { animated, to } from '@react-spring/web';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

import useSpotlight from 'hooks/useSpotlight';
import ROUTES from 'constants/routes';

const cn = classNames.bind(styles);

const menus = [
  { label: '前端', href: ROUTES.FRONTEND },
  { label: '后端', href: ROUTES.BACKEND },
  { label: '网络', href: ROUTES.NETWORK },
  { label: '计算机', href: ROUTES.COMPUTER },
  { label: '工具', href: ROUTES.UTILS },
  { label: '菜品', href: ROUTES.DISH },
];
const Header = () => {
  const pathname = window.location.pathname;
  const [{ x: spotX, y: spotY, r: spotR }, onMouseMove] = useSpotlight();

  return (
    <div className="prose-container flex items-center justify-between h-[80px]">
      <div></div>
      <nav>
        <ul
          className="group flex items-center px-3 ring-1 ring-zinc-900/5 dark:ring-zinc-100/10 rounded-full bg-gradient-to-b from-zinc-50/70 to-white/70 dark:from-zinc-900/70 dark:to-zinc-800/70 backdrop-blur backdrop-saturate-200 shadow-lg shadow-zinc-800/5"
          onMouseMove={onMouseMove}
        >
          {/* Spotlight overlay */}
          <animated.div
            className="pointer-events-none absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary/[0.12]"
            style={{
              background: to(
                [spotX, spotY, spotR],
                (x, y, r) =>
                  `radial-gradient(${r}px circle at ${x}px ${y}px, currentColor 0%, transparent 65%)`
              ),
            }}
            aria-hidden
          ></animated.div>
          {menus.map((menu) => (
            <li key={menu.href}>
              <a
                className={cn(
                  'relative block py-2 px-3 font-medium text-sm hover:text-primary transition-colors',
                  {
                    'text-primary': pathname === menu.href,
                  }
                )}
                href={menu.href}
              >
                {menu.label}
                <span
                  className={cn(
                    'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 dark:via-primary/60 to-primary/0 transition-opacity',
                    { 'opacity-0': pathname !== menu.href },
                    { 'opacity-100': pathname === menu.href }
                  )}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

Header.type = 'component';

export default Header;
