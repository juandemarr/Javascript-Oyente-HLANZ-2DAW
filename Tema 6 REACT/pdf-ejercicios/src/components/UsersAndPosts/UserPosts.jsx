import React, { useEffect, useState } from 'react'
import api from '../../helpers/getJSONPlaceholder.jsx';

const UserPosts = () => {
  ///////////////////////estados
  const [arrayUsers, setArrayUsers] = useState([]);
  
  const consultarAPIposts = () => {
    api().then(users => setArrayUsers(users));
  }
  
  //////////////////////efectos
  useEffect(() => {
    consultarAPIposts();
  }, [])
  

  //////////////////////pintado
  return (
    <div>
      <h3>Usuarios y posts</h3>
        <ul>
          {arrayUsers.map((user) => (
            <li key={user.id}>{/* <Link to={}> */}{user.name}{/* </Link> */}</li>
          ))}
        </ul>
    </div>
  )
}

export default UserPosts