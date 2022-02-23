import React from 'react'
import Componente2 from './Componente2'

const Componente1 = ({global,setGlobal,handleEliminar}) => {
  return (
    <>
        <div>Componente1</div>
        <div>{global.nombre}</div>
        <div>
            <button onClick={()=>handleEliminar(3)}>Eliminar</button>
        </div>

        <div>
          <Componente2
            global={global.nombre}
            setGlobal={setGlobal} 
            handleEliminar={handleEliminar}
          />

        </div>
    </>
  )
}

export default Componente1