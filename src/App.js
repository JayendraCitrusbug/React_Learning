import React, { useReducer } from 'react';
import './App.css';
import './appStyles.css'
import DataFatching1 from './components/useReducerHook/DataFatching1';
// import NameList from './components/beginning/NameList';
// import FunctionClick from './components/beginning/FunctionClick';
// import StyleSheet from './components/beginning/StyleSheet';
// import Fragment from './components/beginning/Fragment';
// import Table from './components/beginning/Table';
// import ClassCounter from './components/beginning/ClassCounter';
// import HookCounter from './components/useStateHook/HookCounter';
// import HookCounter2 from './components/useStateHook/HookCounter2';
// import HookCounter3 from './components/useStateHook/HookCounter3';
// import HookCounter4 from './components/useStateHook/HookCounter4';
// import HookCounter1UE from './components/useEffectHook/HookCounter1_UE';
// import HookCounter2UE from './components/useEffectHook/HookCounter2_UE';
// import HookMouse from './components/useEffectHook/HookMouse';
// import MouseContainer from './components/useEffectHook/MouseContainer';
// import IntervalHookCounter from './components/useEffectHook/IntervalHookCounter';
// import DataFetching from './components/useEffectHook/DataFetching';
// import ComponentC from './components/useContextHook/ComponentC';
// import Counter1 from './components/useReducerHook/Counter1';
// import Counter2 from './components/useReducerHook/Counter2';
// import Counter3 from './components/useReducerHook/Counter3';
// import ComponentA from './components/useReducerHook/ComponentA_UR';
// import ComponentB from './components/useReducerHook/ComponentB_UR';
// import ComponentC from './components/useReducerHook/ComponentC_UR';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {<DataFatching1/>}
    </div>
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     Count - {count}
    //     {/* {<FunctionClick/>} */}
    //     {/* {<NameList />} */}
    //     {/* <h1 className='error'>Error</h1> */}
    //     {/* {<StyleSheet secondary={false} />} */}
    //     {/* {<Fragment/>} */}
    //     {/* {<Table/>} */}
    //     {/* {<ClassCounter/>} */}
    //     {/* {<HookCounter/>} */}
    //     {/* {<HookCounter2/>} */}
    //     {/* {<HookCounter3/>} */}
    //     {/* {<HookCounter4/>} */}

    //     {/* { <HookCounter1UE/> } */}
    //     {/* { <HookCounter2UE/> } */}
    //     {/* {<HookMouse/>} */}
    //     {/* {<IntervalHookCounter/>} */}
    //     {/* {<MouseContainer/>} */}
    //     {/* {<DataFetching/>} */}

    //     {/* {<UserContext.Provider value={'Test'}>
    //     <ChannelContext.Provider value={'Context'}>
    //     <ComponentC />
    //     </ChannelContext.Provider>
    //   </UserContext.Provider>} */}

    //     {/* {<Counter1/>} */}
    //     {/* {<Counter2/>} */}
    //     {/* {<Counter3/>} */}

    //     {<ComponentA />}
    //     {<ComponentB />}
    //     {<ComponentC />}

    //   </div>
    // </CountContext.Provider>
  );
}

export default App;