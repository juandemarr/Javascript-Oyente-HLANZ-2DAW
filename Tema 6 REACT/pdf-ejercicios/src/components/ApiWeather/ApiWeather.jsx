import React from 'react'
import getApi from "../../helpers/getApiWeather"; //esto trae una funcion
import PintaWeather from './PintaWeather';

const ApiWeather = () => {
    const cincoCiudades = ["Granada", "Malaga", "Madrid", "Caceres", "Valencia"];
    const arrayCiudades = [];

    cincoCiudades.forEach((element)=>{ 
        getApi(element).then((data)=>{
           arrayCiudades.push(data);
        })
        // arrayCiudades.push({
        //     "name":element,
        //     "min":{
        //         "temp":15
        //     }
        // })
    });

    //----------pintado
    return (
        <div>
            <h3>Nombre ciudad / temperatura</h3>
            <PintaWeather arrayCiudades = {arrayCiudades}/>
        </div>
    )
}

export default ApiWeather