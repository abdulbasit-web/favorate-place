import {useCallback, useReducer} from 'react'

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

function useForm(initialInputs,initialFormValidity) {
  const [formState, dispatch] = useReducer(reducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  })

  
  //when ever the compenent render again it create  a new titleInputHandler
  //to prevent this we use useCallback, the function will be stored and
  //reused again
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({type: 'INPUT_CHANGE', inputId: id, isValid, value})
  }, [])


  return [formState,inputHandler]
  
}

export default useForm
