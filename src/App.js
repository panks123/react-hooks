import './App.css';
import UnderstandUseEffectHook from './components/UnderstandUseEffectHook';
import UnderstandUseStateHook from './components/UnderstandUseStateHook';
import UnderstandUseMemoHook from './components/UnderstandUseMemoHook'
import UnderstandUseRefHook from './components/UnderstandUseRefHook'
import UnderstandUseContextHook from './components/UnderstandUseContextHook'
import UnderstandUseReducerHook from './components/UnderstandUseReducerHook';
import UnderstandCustomHooks from './components/UnderstandCustomHooks';
import ThemeState from './components/contexts/ThemeState';

// Note: 1. We can use hooks only inside Function based components, we cannot use Hooks inside Class based components.
//       2. Hooks can only be called at the top level of a component.
//       3. Hooks cannot be conditional, means we cannot put hooks inside if-else - to maintain the same order of hooks for always

function App() {

  return (
    // We wrapped below evrything inside ThemeState so that we can use the Theme context in any of the children tree(Added this : when learning useContextHook)
    <ThemeState>
      <div className="App">
        {/* 1. useState Hook */}
        <h1>useState Hook in React</h1>
        <div className="usestate-hook">
          <UnderstandUseStateHook/>
        </div>
        {/* 2. useEffect Hook */}
        <h1>useEffect Hook in React</h1>
        <div className="useffect-hook">
          <UnderstandUseEffectHook/>
        </div>
        {/* 3. useMemo Hook */}
        <h1>useMemo Hook in React</h1>
        <div className="usememo-hook">
          <UnderstandUseMemoHook/>
        </div>
        {/* 4. useRef Hook */}
        <h1>useRef Hook in React</h1>
        <div className="useref-hook">
          <UnderstandUseRefHook/>
        </div>
        {/* 5. useContext Hook */}
        <h1>useContext Hook in React</h1>
        <div className="usecontext-hook">
          <UnderstandUseContextHook/>
        </div>
        {/* 6. useReducer Hook */}
        <h1>useReducer Hook in React</h1>
        <div className="usereducer-hook">
          <UnderstandUseReducerHook/>
        </div>
        {/* 7. react Custom Hooks */}
        <h1>Custom Hooks in React</h1>
        <div className="custom-hook">
          <UnderstandCustomHooks/>
        </div>
      </div>
    </ThemeState>
  );
}

export default App;
