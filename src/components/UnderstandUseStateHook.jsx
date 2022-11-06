import {useState} from 'react'

const UnderstandUseStateHook = () => {
    const [count, setCount] = useState(0) 

    const [obj, setObj] = useState({color: "red", theme: "light"}) // State with objects as initial value
    // useState always returns an array with two things inside : state variable and the function to change the state variable, And 
    // it takes initial value for the state variable as argument
    // Note that we can change the value of the state variable only using the setState function returned by the useState Hook
    // We cannot set it by using assignment operator. It is not allowed in React

    // const decrementCount =()=>{
    //   setCount(count-1)
    // }
    // It works but still this is not the correct way to do it, It should be refactored as follows:
    const decrementCount = ()=>{
        setCount(( prevCount )=>{ return prevCount - 1})
      }
      
    // const incrementCount =()=>{
    //   setCount(count+1)
    // }

    // const changeColor = ()=>{
    //   setObj({...obj, color: "blue"})// This will change only the color in the obj state variable and theme will be same as previous
    // }

    // function argument version of the above
    const changeColor = ()=>{
      setObj((prevObj)=>{
        return {...prevObj, color: "blue"} // This will change only the color in the obj state variable and theme will be same as previous
      })
    }

    const incrementCount =()=>{
      setCount(( prevCount )=>{ return prevCount + 1})
    }


  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <br/>
      <span>{`Color: ${obj.color} || Theme: ${obj.theme}`}</span>
      <button onClick={changeColor}>Change Color to blue</button>
    </div>
  )
}

export default UnderstandUseStateHook
