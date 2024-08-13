import { useSelector } from 'react-redux';

import { loadingSelector } from 'store/loading/getter';

import Loading from 'components/base/Loading';
import DesktopHeader from 'components/base/Header';
import GithubCorner from 'components/base/GithubCorner';
import RouterComponent from 'components/router';

const App = () => {
  const isLoading = useSelector(loadingSelector);
  return (
    <>
      {isLoading && <Loading />}
      <GithubCorner />
      <DesktopHeader />
      <RouterComponent />
    </>
  );
};

export default App;
