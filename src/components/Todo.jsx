import React from 'react'
import { ACTIONS } from './UnderstandUseReducerHook'

const Todo = ({todo, dispatch}) => {
  return (
    <div>
      <span style={{color: todo.isComplete ? "#AAA" : "#000"}}>
        {todo.name}
      </span>
      <button onClick={ ()=> dispatch({ type: ACTIONS.TOGGLE_COMPLETE_TODO, payload: { id: todo.id }})} style={{margin: "2px"}}>{ todo.isComplete ? "Set Incomplete" : "Set Complete"}</button>
      <button onClick={ ()=> dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})} style={{margin: "2px"}}>Delete</button>
    </div>
  )
}

export default Todo;
