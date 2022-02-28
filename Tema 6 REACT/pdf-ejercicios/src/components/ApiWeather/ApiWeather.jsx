import React, { useEffect, useState } from 'react'
import getApi from "../../helpers/getApiWeather"; //esto trae una funcion

const ApiWeather = () => {
    const cincoCiudades = ["Granada", "Malaga", "Madrid", "Caceres", "Valencia"];
    const [arrayCiudades, setArrayCiudades] = useState([]);

    const consultarAPI =  () => {
        cincoCiudades.forEach((element)=>{
            getApi(element).then((city) => {
                setArrayCiudades([...arrayCiudades, city]);
            })
        });
    }
    
    useEffect(() => {
        consultarAPI();
    }, []);
    

    //----------pintado
    return (
        <div>
            <h3>Nombre ciudad / temperatura</h3>
            <ul>
                {arrayCiudades.map((ciudad,index)=>(
                    <li key={index}>{ciudad?.name} / {ciudad?.main?.temp}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default ApiWeather