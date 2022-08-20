import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {<FunctionClick/>} */}
        {<NameList />}
      </header>
    </div>
  );
}

export default App;
