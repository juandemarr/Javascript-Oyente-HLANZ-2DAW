import React from 'react';

const APIWeatherInfo = ({temp,humidity,pressure,description,name,speed,country,sunset}) => {
    //destructuring al coger las variables
    //probando a pasar las variables del otro componente a este
  return(
    <div>
        <p>Temperatura: {temp}</p>
        <p>Humedad: {humidity}</p>
        <p>Presion: {pressure}</p>
    </div>
  );
};

export default APIWeatherInfo;
