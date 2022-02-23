import React from 'react'

const PintaWeather = ({arrayCiudades}) => {
    //console.log(arrayCiudades);
return (
    <div>
        {arrayCiudades.map( e => (
            <p key={e.name}>{e.name} : {e.min.temp}</p>
        ))}
    </div>
  )
}

export default PintaWeather