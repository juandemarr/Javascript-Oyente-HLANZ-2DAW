const getInfo = async (props) => {
    try{
        //ahora realizo una consulta a la API
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=2b4e73c14a33e69a31d72a6ea2c0aef2&lang=ES`;
        //se puede concatenar o usar template, ya que esto es js
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        return data;
    }catch(error){
        console.log(error);
    }
    //consumirla en APIWeather.jsx con una promesa
};

export default getInfo;
