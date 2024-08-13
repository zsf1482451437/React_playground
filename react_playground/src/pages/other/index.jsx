import { CodeBlock, nord } from 'react-code-blocks';
const MyCodeComponent = () => (
  <CodeBlock text="HELLO WORLD" theme={nord} language="text" />
);

MyCodeComponent.type = 'other';

export default MyCodeComponent;
