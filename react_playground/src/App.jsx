import 'assets/css/App.css';

// 从 autoImport 的 index.js 直接导入所有组件
import * as Components from './components/autoImport';

const arr = Object.keys(Components).map((key) => {
  const Component = Components[key];
  return <Component key={key} />;
});

function App() {
  return <div className="App">{arr.length > 0 ? arr : '组件列表为空'}</div>;
}

export default App;
