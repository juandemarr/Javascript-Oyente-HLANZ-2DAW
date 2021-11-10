//try para codigo de bloque que puede dar error. Si la primera no produce error, la ejecuta y continua con la 2, al ser interpretado. Si esta produce error, salta al catch
//catch coger los errores y hacer algo
//finally se ejecuta siempre
try{
    let numero="y";
    if(isNaN(numero)){
        throw new Error("el caracter introducido no es un numero");//no es obligatorio, solo para dar un 
        //mensaje personalizado
    }
    console.log(numero*numero);
    
}catch(error){
    console.log("Se produjo el siguiente error: `${error}`");
}

