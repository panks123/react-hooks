import { useState, useEffect } from 'react'

// We have created a new file called 'useFetch.js' containing a function called useFetch which contains all of the logic needed to fetch our data.
// In components/UnderstandCustomHooks.jsx we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.

export default function useFetch(url){
    // Here in the custom hook function, we can write any custom logic where we may use the other pre-defined react hooks based on our logic
    const [data, setData] =useState(null)

    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(data => setData(data))
    },[url])

    return [data];
}