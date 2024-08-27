import { CopyBlock, atomOneDark } from 'react-code-blocks';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

/**
 * TODO: fix console warning
 **/

const Code = ({
  showLineNumbers = true,
  code = 'HELLO WORLD',
  theme = atomOneDark,
  language = 'jsx',
}) => (
  <div className={`${cn('code_container')} code_container_preview`}>
    <CopyBlock
      text={code}
      showLineNumbers={showLineNumbers}
      theme={theme}
      language={language}
      codeBlock={true}
    />
  </div>
);

Code.type = 'component';

export default Code;
