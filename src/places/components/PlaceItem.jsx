import React from 'react'


import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import  './PlaceItem.css'

function PlaceItem(props) {
  // {id: "p1", title: "Empire State Building", description: "One of the most famous sky scrapers in the world!", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thu…_Building.jpg/640px-NYC_Empire_State_Building.jpg", address: "20 W 34th St, New York, NY 10001", …}
  const {imageUrl , title, address , description , id} =  props
  
  return (
    <li className="place-item">
    <Card className="place-item__content">
      <div className="place-item__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="place-item__info">
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </div>
      <div className="place-item__actions">
        <Button inverse>VIEW ON MAP</Button>
        <Button to={`/places/${id}`}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </Card>
  </li>
  )
}

export default PlaceItem
