const getApiWeather = async (city) => {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2b4e73c14a33e69a31d72a6ea2c0aef2&lang=ES`);
        let data = await response.json();
        return data;
    }catch(e){
        console.log(e)
    }
}

export default getApiWeather;