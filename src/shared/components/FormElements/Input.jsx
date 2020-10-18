import React, {useReducer} from 'react'

import {validate} from '../../util/validators'
import './Input.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {...state, value: action.val, isValid: validate(action.val, action.validators)}
    case 'TOUCH':
      return {...state, isTouched: true}
    default:
      return state
  }
}

function Input(props) {
  const {element, id, label, type, placeholder, rows, errorText, validators} = props

  const [inputState, dispatch] = useReducer(reducer, {
    value: '',
    isValid: false,
    isTouched: false,
  })

  const changeHandler = e => {
    dispatch({type: 'CHANGE', val: e.target.value, validators})
  }

  const touchHandler = e => {
    dispatch({type: 'TOUCH'})
  }

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {element === 'input' ? (
        <input
          value={inputState.value}
          onChange={changeHandler}
          type={type}
          id={id}
          onBlur={touchHandler}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          value={inputState.value}
          onChange={changeHandler}
          onBlur={touchHandler}
          id={id}
          rows={rows || '3'}
        />
      )}
      {/* //if inputState.isValis is flase */}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  )
}

export default Input