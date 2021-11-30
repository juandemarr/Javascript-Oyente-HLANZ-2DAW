const eleAcordeon = document.getElementsByClassName("acordeon");
//console.log(elementoAcordeon);

//Array.from para convertirlo en array, innecesario ya que usamos for of
for(let elemento of eleAcordeon){
    //elemento.classList.toggle(xxx) <-- cambia un elemento de una clase;
    elemento.addEventListener("click",(e)=>{
        elemento.classList.toggle("active");

        let panel = elemento.nextElementSibling;
        if(panel.style.display == "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
            

    });
}