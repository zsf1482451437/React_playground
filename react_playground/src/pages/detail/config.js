import Card from 'components/base/Card';
import GithubCorner from 'components/base/GithubCorner';
import Header from 'components/base/Header';
import Loading from 'components/base/Loading';
import ReactLogo from 'components/base/ReactLogo';

import DETAIL from 'constants/detail';

const common_data = [
  { path: DETAIL.CARD, component: <Card /> },
  { path: DETAIL.GITHUB, component: <GithubCorner /> },
  { path: DETAIL.HEADER, component: <Header /> },
  { path: DETAIL.LOADING, component: <Loading /> },
  { path: DETAIL.LOGO, component: <ReactLogo /> },
];
export default common_data;
