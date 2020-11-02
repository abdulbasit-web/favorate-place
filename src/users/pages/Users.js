import React, {useState, useEffect} from 'react'

import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import UsersList from '../components/UsersList'

function Users() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('http://localhost:5000/api/users')
        const responseData = await response.json()
        console.log(responseData)
        setUsers(responseData.users)
        if (!response.ok) {
          throw new Error(responseData.message)
        }
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setError(err.message)
      }
    }

    getUser()
  }, [])

  function errorHandler() {
    setError(null)
  }

  return (
    <React.Fragment>
      <ErrorModal onClear={errorHandler} error={error} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && users && <UsersList items={users} />}
    </React.Fragment>
  )
}

export default Users
