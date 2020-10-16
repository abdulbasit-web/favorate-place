import React from 'react'
import UserItem from './UserItem'
import  './UserLits.css'

function UsersList({items}) {

  return <div>
    {items.length===0?(
      <div className="center">
        <h2>No User Found.</h2>
      </div>
    ):(
    <ul>
      {items.map(user=>
        <UserItem key={user.id} {...user}/>
      )}
    </ul>
    )}
  </div>
}

export default UsersList
