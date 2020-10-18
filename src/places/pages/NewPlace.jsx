import React, {useCallback, useReducer} from 'react'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import './NewPlace.css'

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formValid = true
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) formValid = formValid && action.isValid
        else formValid = formValid && state.inputs[inputId].isValid
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {value: action.value, isValid: action.isValid},
        },
        isValid: formValid,
      }
    default:
      return state
  }
}

function NewPlace() {
  const [formState, dispatch] = useReducer(reducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      descrption: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  })

  //when ever the compenent render again it create  a new titleInputHandler
  //to prevent this we use useCallback, the function will be stored and
  //reused again
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({type: 'INPUT_CHANGE', inputId: id, isValid, value})
  }, [])


  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(formState);
    //send data to the server.....
  }

  return (
    <form className='place-form' onSubmit={handleSubmit}>
      <Input
        id='title'
        onInput={inputHandler}
        type='text'
        label='Title'
        element={'input'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='please enter a valid title.'
      />
      <Input
        id='descrption'
        onInput={inputHandler}
        label='Description'
        element={'textarea'}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='please enter a valid description (at least 5 characters).'
      />
      <Input
        id='address'
        onInput={inputHandler}
        label='Address'
        element={'input'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='please enter a valid Address.'
      />
      <Button type='submit' disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  )
}

export default NewPlace
