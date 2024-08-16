import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CodeComponent from 'components/base/codeComponent';

import codeMapArr from './component_config';

const Detail = () => {
  const location = useLocation();
  const [codeString, setCodeString] = useState('');
  useEffect(() => {
    const path = location.pathname;
    const codeMap = codeMapArr.find((item) => item.path === path);
    setCodeString(codeMap.code);
  }, [location]);
  return (
    <div>
      <CodeComponent code={codeString} language="jsx" />
    </div>
  );
};

export default Detail;
