import React, {useCallback} from 'react'

import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import './NewPlace.css'

function NewPlace() {
  //when ever the compenent render again it create  a new titleInputHandler
  //to prevent this we use useCallback, the function will be stored and
  //reused again
  const titleInputHandler = useCallback((id, value, isValid) => {}, [])

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, [])

  return (
    <form className='place-form'>
      <Input
        id='title'
        onInput={titleInputHandler}
        type='text'
        label='Title'
        element={'input'}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='please enter a valid title.'
      />
      <Input
        id='descrption'
        onInput={descriptionInputHandler}
        label='Description'
        element={'textarea'}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='please enter a valid description (at least 5 characters).'
      />
    </form>
  )
}

export default NewPlace
