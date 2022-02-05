fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( a => a.json()) //.json() coge el string json de la web y lo convierte a objeto json usable, parseado, 
                          //devolviendo una promesa
    .then( a => console.log(a))

