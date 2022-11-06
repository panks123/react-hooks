import React, { useReducer, useState} from 'react'
import Todo from './Todo'

// The useReducer is a hook that is used to manage the state of the application. 
// It is very similar to the useState hook, just more complex. It acts as an alternate hook to the 
// useState hook to manage complex state in our application.
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.

// The useReducer hook uses the same concept as the reducers in Redux. 
// Reducers are pure functions that take in a state and action and return a new state.

// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)

// ** The reducer takes in the state and action as parameters, and updates the state of the application, based on the action that was dispatched by the component.
//    The reducer here is similar to the reducer in redux.
// ** initialState can be a simple value but generally will contain an object.
// ** The useReducer Hook returns the current state and a dispatch method.
// dispatch is also similar to what is present in Redux. It use used to dispatch the actions

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_COMPLETE_TODO: 'toggle-complete-todo',
  DELETE_TODO: 'delete-todo'
}
export { ACTIONS }

function reducer(todos, action)
{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_COMPLETE_TODO:
          return todos.map(todo =>{
            if(todo.id === action.payload.id)
            {
                return {...todo, isComplete: !todo.isComplete}
            }
            // else
            return todo
          })
        
          case ACTIONS.DELETE_TODO:
            return todos.filter((todo)=>{
                return todo.id !== action.payload.id
            }) 
        default:
            return todos;
    }
}

function newTodo(name){
    return { 
        id: Date.now(),
        name: name,
        isComplete: false
    }
}

const UnderstandUseReducerHook = () => {
    const [name, setName]= useState('')
    const [todos, dispatch] = useReducer(reducer , []) // here an empty array is the initialState

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: { name: name }})
        setName('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange = { e => { setName(e.target.value)}} />
        <button type='submit'>Add todo</button>
      </form>
      <h2>Your todos:</h2>
      <hr />
      { todos.map((todo) => {
        return (
            <Todo key = {todo.id} todo = {todo} dispatch = {dispatch}/>
        )
      })}
    </div>
  )
}

export default UnderstandUseReducerHook
