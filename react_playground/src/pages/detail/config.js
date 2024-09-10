// 组件
import {
  Card,
  Tab,
  Code,
  GithubCorner,
  Header,
  Loading,
  ReactLogo,
} from 'components/index';
// 动画
import Flame from 'pages/animation/flame';
import Particle from 'pages/animation/particle';

import DETAIL from 'constants/detail';

// 加载组件的源代码
import CardSource from '!!raw-loader!components/base/Card/index.jsx';
import CodeSource from '!!raw-loader!components/base/Code/index.jsx';
import TabSource from '!!raw-loader!components/base/Tab/index.jsx';
import GithubCornerSource from '!!raw-loader!components/base/GithubCorner/index.jsx';
import HeaderSource from '!!raw-loader!components/base/Header/index.jsx';
import LoadingSource from '!!raw-loader!components/base/Loading/index.jsx';
import ReactLogoSource from '!!raw-loader!components/base/ReactLogo/index.jsx';
import FlameSource from '!!raw-loader!pages/animation/flame/index.jsx';
import ParticleSource from '!!raw-loader!pages/animation/particle/index.jsx';

// 加载组件的样式
import CardStyle from '!!raw-loader!components/base/Card/index.module.scss';
import CodeStyle from '!!raw-loader!components/base/Code/index.module.scss';
import TabStyle from '!!raw-loader!components/base/Tab/index.module.scss';
import GithubCornerStyle from '!!raw-loader!components/base/GithubCorner/index.module.scss';
import HeaderStyle from '!!raw-loader!components/base/Header/index.module.scss';
import LoadingStyle from '!!raw-loader!components/base/Loading/index.module.scss';
import ReactLogoStyle from '!!raw-loader!components/base/ReactLogo/index.module.scss';
import FlameStyle from '!!raw-loader!pages/animation/flame/index.module.scss';
import ParticleStyle from '!!raw-loader!pages/animation/particle/index.module.scss';

const common_data = [
  {
    path: DETAIL.CARD,
    component: <Card />,
    code: CardSource,
    style: CardStyle,
  },
  {
    path: DETAIL.CODE,
    component: <Code />,
    code: CodeSource,
    style: CodeStyle,
  },
  {
    path: DETAIL.TAB,
    component: <Tab />,
    code: TabSource,
    style: TabStyle,
  },
  {
    path: DETAIL.GITHUB,
    component: <GithubCorner />,
    code: GithubCornerSource,
    style: GithubCornerStyle,
  },
  {
    path: DETAIL.HEADER,
    component: <Header />,
    code: HeaderSource,
    style: HeaderStyle,
  },
  {
    path: DETAIL.LOADING,
    component: <Loading />,
    code: LoadingSource,
    style: LoadingStyle,
  },
  {
    path: DETAIL.LOGO,
    component: <ReactLogo />,
    code: ReactLogoSource,
    style: ReactLogoStyle,
  },
  {
    path: DETAIL.FLAME,
    component: <Flame />,
    code: FlameSource,
    style: FlameStyle,
  },
  {
    path: DETAIL.PARTICLE,
    component: <Particle />,
    code: ParticleSource,
    style: ParticleStyle,
  },
];

export default common_data;
