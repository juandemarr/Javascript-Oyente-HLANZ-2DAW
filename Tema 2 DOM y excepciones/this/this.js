console.log(this);//this hace referencia al objeto mas
//grande en el que me encuentro ahora mismo, en este caso
//window
this.nombre="Global";
//todas las funciones menos las flecha, limpian el ambito de this
//las funciones flechas llamarian al padre


function saludo(){
    console.log(this.nombre);//se va arriba y al encontrarla
    //declarada la imprime
}
saludo();

const objeto = {
    nombre:"contexto objeto",
    imprimir:function(){//las funciones en js se pueden asociar a todo
        console.log(this.nombre);
    }
}
objeto.imprimir();

const objeto2 = {
    nombre:"contexto objeto2",
    imprimir:()=>{
        console.log(this.nombre);//al ser funcion flecha, el this no se refiere al ambito del objeto, sino al ambito de donde es llamada
        //se llama afuera en objeto2.imprimir(), ambito global, y ahi esta declarado el this con global, mostrando eso
    },
    dato:{
        nombre:"contexto dato",
        imprimir:()=>{
            console.log(this.nombre);
        }
    }
}
objeto2.imprimir();
objeto2.dato.imprimir()//tbn imprimira contexto global

//las funciones flecha el prolema que acarrean es que heredan el contexto de donde han sido creadas

