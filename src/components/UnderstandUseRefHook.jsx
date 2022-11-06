import React, { useEffect, useRef, useState } from 'react'

// The useRef Hook allows us to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// Also, it can be used to access a DOM element directly.


const UnderstandUseRefHook = () => {
  const [name, setName] = useState('')

  // Suppose we want to count the number of times the component has rendered, Using useState hook in the following way 
  // would lead to an infinite loop case
// const [renderCount, setRenderCount] = useState(0)
// useEffect(()=>{
  // setRenderCount(prevCount=> prevCount +1)
// })

// To avoid this we use useRef hook

const renderCount = useRef(1)
// useRef hook takes an initial value as argument and always returns an object with property 'current' with value set to the initial value 
// passsed as argument with the useRef()
// It's like doing this: const renderCount = {current: 0}
// Now everytime we enter a value in the input field, name state gets changed so the component gets re-rendered and 'renderCount.current' increments by 1

// More popular usecase of useRef hook is to reference the html element inside the DOM of the compoenent

const inputRef = useRef();


useEffect(()=>{
  renderCount.current = renderCount.current + 1;
})

function printInputUsingRef(){
  console.log(inputRef.current)
  console.log(inputRef.current.value)
}

const prevName = useRef('')

// Another usecase of useRef hook is to keep the previous value of state variable.  This we can do because the value of the useRef returned object 
// does not change on re-render , it persists
useEffect(()=>{
  prevName.current = name
}, [name])

  return (
    <div>
      {/* Every html element can have ref attribute which will have value equal to the object returned by the useRef which will reference to that html element */}
      <input ref= {inputRef} type="text" value= {name} onChange = { e => setName(e.target.value)} placeholder= "Enter name"/>
      <div>My name is {name}, and earlier it used to be {prevName.current}</div>
      {/* We can use the UseRef value as useRefReturnedObj.current */}
      <div>Component got rendered {renderCount.current} times</div>
      <button onClick={printInputUsingRef}>Print input in console</button>
    </div>
  )
}

export default UnderstandUseRefHook
