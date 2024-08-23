import { CopyBlock, atomOneDark } from 'react-code-blocks';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

/**
 * TODO: fix console warning
 **/

const CodeComponent = ({
  showLineNumbers = true,
  code = 'HELLO WORLD',
  theme = atomOneDark,
  language = 'jsx',
}) => (
  <div className={cn('code_container')}>
    <CopyBlock
      text={code}
      showLineNumbers={showLineNumbers}
      theme={theme}
      language={language}
      codeBlock={true}
    />
  </div>
);

CodeComponent.type = 'component';

export default CodeComponent;
