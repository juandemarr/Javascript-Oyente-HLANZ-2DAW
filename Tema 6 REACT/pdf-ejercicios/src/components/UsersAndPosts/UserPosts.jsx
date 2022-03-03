import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import apis from '../../helpers/getJSONPlaceholder.jsx';

const UserPosts = () => {
  ///////////////////////estados
  const [arrayUsers, setArrayUsers] = useState([]);
  
  const consultarApiUsers = () => {
    apis.apiUsers().then(users => setArrayUsers(users));
  }
  
  //////////////////////efectos
  useEffect(() => {
    consultarApiUsers();
  }, [])
  

  //////////////////////pintado
  return (
    <div>
      <h3>Usuarios y posts</h3>
        <ul>
          {arrayUsers.map((user) => (
            <li key={user.id}><Link to={user.id.toString()}>{user.name}</Link></li>
          ))}
        </ul>

        {/* <Outlet/> */}

    </div>
   
  )
}

export default UserPosts