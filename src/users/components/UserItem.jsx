import React from 'react'
import './UserItem.css'

function UserItem(props) {

  const {id , name , image,places} = props


  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={image} alt={name}/>
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>{places} {places===1?"Place":"Places"}</h3>
        </div>
      </div>
    </li>
  )
}

export default UserItem
