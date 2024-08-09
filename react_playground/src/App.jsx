import { useSelector } from 'react-redux';

import { loadingSelector } from 'store/loading/getter';

import Page from 'pages';
import Loading from 'components/base/Loading';
import DesktopHeader from 'components/base/Header';

function App() {
  const isLoading = useSelector(loadingSelector);
  return (
    <>
      {isLoading && <Loading />}
      <DesktopHeader />
      <Page />
    </>
  );
}

export default App;
