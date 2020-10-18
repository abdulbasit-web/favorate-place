import React, {useReducer} from 'react'

import './Input.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {...state, value: action.val, isValid: true}
    default:
      return state
  }
}

function Input(props) {
  const {element, id, label, type, placeholder, rows, errorText} = props

  const [inputState, dispatch] = useReducer(reducer, {
    value: '',
    isValid: false,
  })

  const changeHandler = e => {
    dispatch({type: 'CHANGE', val: e.target.value})
  }

  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {element === 'input' ? (
        <input
          value={inputState.value}
          onChange={changeHandler}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      ) : (
        <textarea value={inputState.value} onChange={changeHandler} id={id} rows={rows || '3'} />
      )}
      {/* //if inputState.isValis is flase */}
      {!inputState.isValid && <p>{errorText}</p>}
    </div>
  )
}

export default Input
