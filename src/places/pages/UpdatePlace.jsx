import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'
import useForm from '../../shared/hooks/useForm'
import './UpdatePlace.css'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Evil Tower',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://i.insider.com/58d919eaf2d0331b008b4bbd?width=600&format=jpeg&auto=webp',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
]

function UpdatePlace() {
  const {placeId} = useParams()
  const [loading, setLoading] = useState(true)

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  console.log(placeId)
  const currentPlace = DUMMY_PLACES.find(place => place.id === placeId)

  useEffect(() => {
    if (currentPlace) {
      setFormData(
        {
          title: {
            value: currentPlace.title,
            isValid: true,
          },
          description: {
            value: currentPlace.description,
            isValid: true,
          },
        },
        true
      )
    }
    setLoading(false)
  }, [setFormData, currentPlace])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState)
    //send data to the server.....
  }

  if (!currentPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>could not find place :)</h2>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='center'>
        <Card>
          <h2>Loading....</h2>
        </Card>
      </div>
    )
  }

  return (
    <form className='place-form' onSubmit={handleSubmit}>
      <Input
        id='title'
        element='input'
        type='text'
        label='title'
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Plase enter a valid title.'
        initialValue={formState.inputs.title.value}
        inisialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Plase enter a valid description (at least 5 characters).'
        initialValue={formState.inputs.description.value}
        inisialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
