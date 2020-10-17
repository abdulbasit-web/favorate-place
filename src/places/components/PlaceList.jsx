import React from 'react'

import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
import  './PlaceList.css'

function PlaceList(props) {
  return (
    <>
      {props.items.length===0 ? (
        <div className="place-list ceneter">
          <Card>
            <h2>No place found, Maybe create one?</h2>
            <button>Share place</button>
          </Card>
        </div>
      ): (
        <ul className='place-list'>
          {props.items.map(place=><PlaceItem key={place.id} {...place}/>)}
        </ul>
      )}
    </>
  )
}

export default PlaceList
