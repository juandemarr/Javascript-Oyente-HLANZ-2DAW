/**
 * @description uso de api fetch
 * La API Fetch proporciona una interfaz para recuperar recursos de internet.
 * Sustituye a XMLHttpRequest
 * 
 * Para acceder a pag web y traer recursos. Los datos traidos estan en modo lectura (json)
 */

//el fetch ya es una promesa creada.
//Ej de GET
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => console.log(response));

//Hacer GET para traer los albumes y obtener el json con todos los albunes. Meterlos en una tabla
const albunes = document.getElementById("albunes");

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        for(let key in data){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td1Text = document.createTextNode(data[key].id);
            td1.appendChild(td1Text);
            let td2 = document.createElement("td")
            let td2Text = document.createTextNode(data[key].title);
            td2.appendChild(td2Text);
            tr.appendChild(td1);
            tr.appendChild(td2);
            albunes.appendChild(tr);
        }
        
    });

//Hacer GET para traer id e img de fotos. Meterlos en una tabla
const divFotos = document.getElementById("fotos");
let fragment = document.createDocumentFragment();
/*
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => {
        for(let key in data){
            let p = document.createElement("p").appendChild(document.createTextNode(data[key].id));
            let img = document.createElement("img");
            img.setAttribute("src",data[key].url);
            img.setAttribute("width","100px");
            fragment.appendChild(p);
            fragment.appendChild(img);
        }
        divFotos.appendChild(fragment);
    })
*/
//Hacer GET para traer id, name y geo de users. Meterlos en una tabla
const usersTable = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let fragment = document.createDocumentFragment();
        let contId = contName = contLat = contLng = 0;
        //let thLat = document.createElement("th");
        let thLatContent;
        

        for(let key in data){//key = 0
            let tr = document.createElement("tr");
            let trHead = document.createElement("tr");

            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            //let thGeo = document.createElement("th");
            let tdGeo = document.createElement("td");
            

            for(let keyTh in data[key]){//keyTh = id
                if(keyTh == "id"){
                    if(contId == 0){
                    
                        let thId = document.createElement("th");
                        let thContent = document.createTextNode(keyTh);
                        thId.appendChild(thContent);
                        trHead.appendChild(thId);
                        
                    }
                    contId++;
                }else if(keyTh == "name"){
                    if(contName == 0){
                        let thName = document.createElement("th");
                        let thContent = document.createTextNode(keyTh);
                        thName.appendChild(thContent);
                        trHead.appendChild(thName);
                        
                    }
                    contName ++;
                }
                for(let keyGeo in data[key][keyTh]){//keyGeo = geo
                    for(let keyLat in data[key][keyTh][keyGeo]){//keyLat = lat y lng
                        if(keyLat == "lat"){
                            if(contLat == 0){
                                thLatContent = keyLat;
                                contLat++;
                            }  
                        }else if(keyLat == "lng"){
                            if(contLng == 0){
                                thLatContent += "/"+keyLat;
                                //console.log(thLatContent);
                                let thLat = document.createElement("th");
                                thLat.innerHTML = thLatContent;
                                trHead.appendChild(thLat);
                                contLng++;
                            } 
                        }
                        
                        
                    }
                }        
                
                
                
            }
            
            let tdIdContent = document.createTextNode(data[key].id);
            let tdNameContent = document.createTextNode(data[key].name);
            let tdGeoContent = document.createTextNode(data[key].address.geo.lat+"/"+data[key].address.geo.lng);
            tdId.appendChild(tdIdContent);
            tdName.appendChild(tdNameContent);
            tdGeo.appendChild(tdGeoContent);

            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdGeo);
            fragment.appendChild(trHead);
            fragment.appendChild(tr);
        }
        usersTable.appendChild(fragment);
    })

/*
//asincrono SIEMPRE

const getWeather = async () => {
    try{
        let url = ``;

        let res = await fetch(url);
        let data = await res.json();

        //data.main ya usar sus claves y maquetar
    }
}
*/