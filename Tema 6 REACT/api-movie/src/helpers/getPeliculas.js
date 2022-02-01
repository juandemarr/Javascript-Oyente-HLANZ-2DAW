const getPeliculas = async () => {
    try {
        //const tokens = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk2OGQyYmIyMzk4YTRmYmQ5Y2QwN2NiNjc5Yjg0NiIsInN1YiI6IjYxZjAxNWE3Y2VkYWM0MDA2Y2M3NGQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FvnhUKMn0J6sMjwGK-mLfZbjNgHhJsXVCgptx1VcApk";
        const url = "https://api.themoviedb.org/4/discover/movie?api_key=7d968d2bb2398a4fbd9cd07cb679b846&language=es";
        const resp = await fetch(url
            /*, {
            headers : {
                "Authorization" : "Bearer" + tokens,
                "Content-Type" : "application/json;charset=utf-8",
            }
        }*/
        );
    
        const data = await resp.json();
        console.log(data);//siempre hay que comprobar antes que tipo de datos devuelve para escribirlo dsp, en este caso array de objetos, en el useState pondremos[]
        return data;
        
    } catch (error) {
        console.log(error);
    }
};

export default getPeliculas;
