import React from 'react'
import useFetch from './custom-hooks/useFetch'


// A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
// We define them outside of a functional component with custom logic in a separate function so that this function can be imported by
// more than one components and used.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

const UnderstandCustomHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    const data10 = data && data.slice(0,10)
    console.log(data10)

  return (
    <div>
      { data10 && data10.map((item, index)=>{
            return <p key={ item.id }>{index+1}. {item.title}</p>
      })}
    </div>
  )
}

export default UnderstandCustomHooks
