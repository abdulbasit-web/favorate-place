import React from 'react'
import {useParams} from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'

import './UpdatePlace.css'

function UpdatePlace() {
  const {placeId} = useParams()

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

  const currentPlace = DUMMY_PLACES.find(place => place.id === placeId)

  if (!currentPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>could not find place :).</h2>
        </Card>
      </div>
    )
  }

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='title'
        onInput={() => {}}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Plase enter a valid title.'
        value={currentPlace.title}
        valid={true}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        onInput={() => {}}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Plase enter a valid description (at least 5 characters).'
        value={currentPlace.title}
        valid={true}
      />
      <Button type='submit' disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
