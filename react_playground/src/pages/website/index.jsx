import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWebsiteInfo } from 'store/website/thunk';
import { websiteSelector } from 'store/website/getter';

const Website = () => {
  const dispatch = useDispatch();
  const { website_short_name } = useSelector(websiteSelector);
  useEffect(() => {
    dispatch(getWebsiteInfo());
  }, [dispatch]);
  return (
    <div>
      <h2>{website_short_name}</h2>
    </div>
  );
};

export default Website;
