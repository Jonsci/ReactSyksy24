import '../App.css'
import { useState, useEffect } from 'react'
import UserService from '../Services/User'
import UserAdd from './userAdd'

function UserList({setMessage, setIsPositive, setShowMessage}) {

  //State määrittely
const [users, setUsers] = useState([])
const [adding, setAdding] = useState(false)

useEffect(() => {
    UserService.getAll()
    .then(data => setUsers(data)) // asetetaan stateen nimeltä Users
}, [adding])


return (
<div>
    <h2>Users</h2>

    <button onClick={() => setAdding(true)}>Add new user</button>

    {
      adding && <UserAdd setMessage={setMessage} setIsPositive={setIsPositive} 
      setShowMessage={setShowMessage}setAdding={setAdding} />
    }

    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Username</th>
          <th>Accesslevel</th>
        </tr>
      </thead>
        <tbody>
            {users && users.map(u => (
              <tr key={u.userId}>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>{u.username}</td>
                <td>{u.accesLevelId}</td>
              </tr>
            ))}
        </tbody>
    </table>
  </div>
  )
}

export default UserList

