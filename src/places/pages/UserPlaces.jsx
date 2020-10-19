import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

function UserPlaces() {
  const {uid} = useParams()

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
  return <PlaceList items={DUMMY_PLACES.filter(place => place.creator === uid)} />
}

export default UserPlaces
