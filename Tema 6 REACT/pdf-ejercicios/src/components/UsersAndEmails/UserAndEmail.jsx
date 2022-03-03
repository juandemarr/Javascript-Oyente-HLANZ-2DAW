import React, { useEffect, useState } from 'react'
import apis from '../../helpers/getJSONPlaceholder.jsx';

const UserAndEmail = () => {
  //////////////////estados
  const [usuarios, setUsuarios] = useState([])
  
  /////////////////funciones
  const consultarAPI = () => {
    apis.apiUsers().then(users => setUsuarios(users));
  }

  //////////////////efectos
  useEffect(() => {
    consultarAPI();
  }, [])
  

  //////////////////pintamos
  return (
    <div>
      <h3>Usuarios y emails</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map((user,index)=>(
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserAndEmail