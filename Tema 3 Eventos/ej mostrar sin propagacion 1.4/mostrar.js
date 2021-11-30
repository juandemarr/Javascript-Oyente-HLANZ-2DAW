/**
 * @author Juande
 * @description Al clicar en el mes apareceran los datos de adentro, y al clicar de nuevo lo ocultara
 */

function desplegarPrimerUl(e){
    if(e.target.matches(".primerLi")){//li.primerLi se pone como en querySelector (#id) ó (.class)
        for(let ul of e.target.children){//HTML Collection
            if(ul.className == "primerUl")
                if(ul.style.display == "block")
                    ul.style.display = "none";
                else
                    ul.style.display = "block";
        }
    }
}
function desplegarSegundoUl(e){
    if(e.target.matches(".segundoLi")){
        console.log(e.target);
        for(let ul of e.target.children){
            if(ul.className == "segundoUl")
                if(ul.style.display == "block")
                    ul.style.display = "none";
                else
                    ul.style.display = "block";
        }
    }
}

document.addEventListener("click",desplegarPrimerUl);//esta a false, se propagaria hacia arriba, pero al ser document no hay nada mas arriba
document.addEventListener("click",desplegarSegundoUl);

