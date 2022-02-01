import React, { useEffect, useState } from 'react';
import getInfo from '../helpers/getInfo';
import APIWeatherInfo from './APIWeatherInfo';

const APIWeather = () => {
    const [searchTerm,setSearchTerm] = useState("Granada");
    const [tempInfo,setTempInfo] = useState({});

    const getWeatherInfo = () => {
        try {
            getInfo(searchTerm)
            .then((data) => {
                //console.log(data);
                const {temp, humidity, pressure} = data?.main //destructuring, se pueden declarar individualmente
                //interrogacion se pone por si no esta esa clave, que no reviente
                const {description} = data.weather[0];
                const {name} = data;
                const {speed} = data.wind;
                const {country,sunset} = data.sys;
                
                //se crea este objeto par guardar toda la info de golpe en tempInfo, creada arriba
                const miInfo = {
                    temp,
                    humidity,
                    pressure,
                    description,
                    name,
                    speed,
                    country,
                    sunset
                }
                setTempInfo(miInfo);
            })

            //console.log(miInfo);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, [])

  //pintado en el DOM
  return (
    <div>
        <h1>App de consulta del clima</h1>
        <div>
            <input 
                type="search" 
                placeholder="Introduce ciudad, país"
                id="search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={getWeatherInfo}>Buscar</button>
            {/* si no lleva parametros no hay que ponerle parentesis */}
        </div>

        <APIWeatherInfo {...tempInfo}/>
        {/* con spread para coger todos los valores de adentro y cogerlos en el otro componente directamente con destructuring */}

    </div>

    // Aqui debo cargar un componente nuevo con los datos cogidos de la API
  );
};

export default APIWeather;
