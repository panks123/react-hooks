import React, {useState, useEffect} from 'react'

// The useEffect Hook allows us to perform side effects in our components. Means whenever something changes do some corresponding side effects.

const UnderstandUseEffectHook = () => {
  const [resourceType, setResourceType] = useState('posts')

  const [count, setCount] = useState(0)

  console.log("rendered first time") // This line executes every time the component is rendered
  // The function passed inside the below useEffect will be executed every single time the application component is rendered
  // useEffect(()=>{
  //   console.log("Side effect")
  // })

  // But more often we'll need it like : whenever something specific(some variable or state) changes inside the component, 
  // in that case we pass second argument to the useEffect, specifying that specific thing after the change of which the component should show the side effect
  // This second parameter is an array containing the list of those specific things we want to specify.

  // useEffect(()=>{
  //   console.log("Side effect")
  // }, [resourceType])

  // To show the side effect only on mount we pass an empty array as the 2nd argument to the useEffect - This case becomes same as componentDidMount
  useEffect(()=>{
    console.log("On mount")
  }, [])

  // Some effects require cleanup to reduce memory leaks. e.g. Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
  // We do this by including a return function at the end of the useEffect Hook.

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setCount((prevCount) => prevCount + 1)
    },1000)

    return () =>{
      // We do cleanup things here
      console.log("Cleanup things inside usEffect return") // So we can see that first this line executes - so first cleanup will happen -> then the above setCount() executes once
                                                          // As cleanup already happened , i.e. clearTimeOut already happened it will not run again. Same thing we do with eventListeners
      clearTimeout(timer)
    } 
  }, [])

  console.log("count: ", count)

  // So Using useEffect Hook we can mimic "componentDidMount" - by passing an empty array, "componentDidUpdate" - by passang the array with update variables
  // And componentWillUnmount i.e. Cleanup things - by adding a return function inside which we write the cleanup code

  // Below is an example : 
  // **************************************
  // componentDidMount() {
  //   window.addEventListener('mousemove', () => {})
  // }
  
  // componentWillUnmount() {
  //   window.removeEventListener('mousemove', () => {})
  // }
  // *************************************
  // Hook equivalent of above code will be as follows
  
  // useEffect(() => {
  //   window.addEventListener('mousemove', () => {});
  
  //   // returned function will be called on component unmount 
  //   return () => {
  //     window.removeEventListener('mousemove', () => {})
  //   }
  // }, [])
  // **************************************

  return (
    <div>
      <div className="btns">
        <button onClick={()=>{ setResourceType('posts')}}>posts</button>
        <button onClick={()=>{ setResourceType('users')}}>Users</button>
        <button onClick={()=>{ setResourceType('comments')}}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <h3>No. of times rendered: {count}</h3>
    </div>
  )
}

export default UnderstandUseEffectHook
