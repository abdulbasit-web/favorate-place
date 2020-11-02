import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
        const responseData = await axios.get('http://localhost:5000/api/users')

        setUsers(responseData.data.users)

        if (!responseData.ok) {
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
