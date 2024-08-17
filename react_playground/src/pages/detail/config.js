// 组件
import Card from 'components/base/Card';
import GithubCorner from 'components/base/GithubCorner';
import Header from 'components/base/Header';
import Loading from 'components/base/Loading';
import ReactLogo from 'components/base/ReactLogo';
// 动画
import Flame from 'pages/animation/flame';
import Particle from 'pages/animation/particle';

import DETAIL from 'constants/detail';

const common_data = [
  { path: DETAIL.CARD, component: <Card /> },
  { path: DETAIL.GITHUB, component: <GithubCorner /> },
  { path: DETAIL.HEADER, component: <Header /> },
  { path: DETAIL.LOADING, component: <Loading /> },
  { path: DETAIL.LOGO, component: <ReactLogo /> },
  { path: DETAIL.FLOWER, component: <Flame /> },
  { path: DETAIL.PARTICLE, component: <Particle /> },
];
export default common_data;
