import React, {useCallback, useReducer} from 'react'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import useForm from '../../shared/hooks/useForm'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import './NewPlace.css'

function NewPlace() {
  const [formState, inputHandler] = useForm(
    {
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
    false
  )

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState)
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
