import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const UserList: FC = () => {
  const { loading, users, error } = useTypedSelector(state => state.users)
  const { fetchUsers } = useActions()
  
  useEffect(() => {
    fetchUsers()
  }, [])
  
  if (loading) {
    return <h1>Loading ...</h1>
  }
  
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.length && users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  )
}
