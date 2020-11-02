import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import {AuthContext} from '../../shared/context/AuthContext'
import useForm from '../../shared/hooks/useForm'
import {useHttp} from '../../shared/hooks/useHttp'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import './NewPlace.css'

function NewPlace() {
  const {error, isLoading, sendRequest, clearError} = useHttp()
  const {userId} = useContext(AuthContext)
  const history = useHistory()
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
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

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await sendRequest(
        `http://localhost:5000/api/places/`,
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: userId,
        }),
        {
          'Content-Type': 'application/json',
        }
      )

      history.push('/')
    } catch (err) {}
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner asOverlay />
        </div>
      )}
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
          id='description'
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
    </React.Fragment>
  )
}

export default NewPlace
