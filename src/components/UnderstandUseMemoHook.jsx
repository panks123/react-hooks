import React, { useState, useMemo } from 'react'


// The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated.
// The useMemo Hook only runs when one of its dependencies update. 

// We use useMemo hook when there is a costly function which runs on every render and we know that it's value will be same for some value (i.e. dependency)
// This prevents us from re-calling everytime that costly function. Hence it can improve performance


const UnderstandUseMemoHook = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    // const doubleNumber = slowDoubleFunction(number) // On every state change the component will re-render and execute this line everytime and this line executes slow
    // Without useMemo changeTheme is slow even when number is not changed
    const doubleNumber = useMemo(() => {
        return slowDoubleFunction(number)
    }, [number]) // here the number is dependency

    // After useMemo changeTheme works instantly - it has become fast now

  return (
    <div>
      Number : <input type="number" value={number} onChange={ e => setNumber(parseInt(e.target.value))}/>
      <div style={themeStyle}>Doubled number : {doubleNumber}</div>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
    </div>
  )
}

function slowDoubleFunction(n){
    for(let i=0; i<1000000000; i++){}
    return n * 2;
}

export default UnderstandUseMemoHook;
