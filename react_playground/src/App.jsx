import { useSelector } from 'react-redux';

import { loadingSelector } from 'store/loading/getter';

import Page from 'pages';
import Loading from 'components/base/Loading';

function App() {
  const isLoading = useSelector(loadingSelector);
  return (
    <>
      {isLoading && <Loading />}
      <Page />
    </>
  );
}

export default App;
