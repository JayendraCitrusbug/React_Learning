import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import NameList from './components/beginning/NameList';
import FunctionClick from './components/beginning/FunctionClick';
import StyleSheet from './components/beginning/StyleSheet';
import Fragment from './components/beginning/Fragment';
import Table from './components/beginning/Table';
import ClassCounter from './components/beginning/ClassCounter';
import HookCounter from './components/useStateHook/HookCounter';
import HookCounter2 from './components/useStateHook/HookCounter2';
import HookCounter3 from './components/useStateHook/HookCounter3';
import HookCounter4 from './components/useStateHook/HookCounter4';
import HookCounter1_UE from './components/useEffectHook/HookCounter1_UE';

function App() {
  return (
    <div className="App">
      {/* {<FunctionClick/>} */}
      {/* {<NameList />} */}
      {/* <h1 className='error'>Error</h1> */}
      {/* {<StyleSheet secondary={false} />} */}
      {/* {<Fragment/>} */}
      {/* {<Table/>} */}
      {/* {<ClassCounter/>} */}
      {/* {<HookCounter/>} */}
      {/* {<HookCounter2/>} */}
      {/* {<HookCounter3/>} */}
      {/* {<HookCounter4/>} */}

      {<HookCounter1_UE/>}
    </div>
  );
}

export default App;