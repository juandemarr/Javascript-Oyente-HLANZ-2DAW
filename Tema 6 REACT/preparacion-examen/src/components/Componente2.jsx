import React from 'react'

const Componente2 = ({global,setGlobal,handleEliminar}) => {
  const handleModificarGlobal = () => {
    const newUser = {
      nombre: "Hello",
      visible:false,
    }
    setGlobal(newUser);
  }

  return (
    <>
      <hr/>
      <div>Eliminar desde componente2</div>
      <div><button onClick={()=>handleEliminar(6)}>Eliminar desde componente2</button></div>
      <div>
        <button onClick={handleModificarGlobal}>Modificar global</button>
      </div>
    </>
  )
}

export default Componente2