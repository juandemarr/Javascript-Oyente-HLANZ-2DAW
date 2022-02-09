import { useState } from "react";
import {useForm} from "react-hook-form";

//cosas a importar por firebase
import firebase from "../firebase";
//autorizando global
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
const autorizacion = getAuth(firebase);//libreria de firebase, le pasamos nuestras credenciales de firebase 
                                        //copiadas desde alli
//autorizado de google
const googleProvider = new GoogleAuthProvider();
//insertando modificando



function SignIn(){
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    const {register,handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = async(data,e) => {//funcion que se encarga de enviar los datos del form, creada por react-hook-form
                                    //al enviar datos a google, async
        console.log(data);
        try{
            const email = data.email;
            const password = data.password;

            if(estaRegistrandose){
                //no estoy registrado y me quiero registrar con mi correo
                //(createUserWithEmailAndPassword(autorizacion, email, password))
                const usuario =  await createUserWithEmailAndPassword(autorizacion,email,password);
                console.log("Esto manda al registrar: ",usuario);
            }else{
                //estoy registrado y quiero iniciar sesion
                //signInWithEmailAndPassword(autorizacion,email,password)
                await signInWithEmailAndPassword(autorizacion,email,password);
            }

        }catch(error){

        }
        
        e.target.reset();//limpia el form
    } 

    return(
        <div className="my-5">
            <h2 className="mb-3">{estaRegistrandose ? "Registrarse" : "Iniciar sesión"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5"> {/* este onSubmit es asi si o si */}
                <input 
                    placeholder="Email"
                    className="form-control mb-2"
                    name="email"
                    {
                        ...register("email",{//los campos que requieran de un mensaje en caso de error, se ponen sus valores como objeto con indices value para el valor y message para el mensaje del error
                            required:{value : true , message : "Email requerido"},
                            pattern: {value : /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,4}$/i , message : "Email no valido"}
                        })  
                    }   
                />

                <span className="text-danger text-small d-block mb-2">
                    {errors?.email?.message}
                </span>

                <input 
                    type="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    name="password"
                    {
                        ...register("password",{
                            required:{value:true , message : "Contraseña requerido"},
                            minLength:{value : 4 , message : "Longitud insuficiente"}
                        })  
                    }    
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.password?.message}
                </span>

                <button type="submit" className="btn btn-primary">{estaRegistrandose ? "Registrarse" : "Iniciar sesión"}</button>
            </form>

            <button
                className="btn btn-primary mr-2"
                onClick={() => signInWithRedirect(autorizacion, googleProvider)}
            >Accede con Google</button>
            <button 
                className="btn btn-warning"
                onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
                {estaRegistrandose ? "Iniciar sesion" : "Registrarse"}
            </button>
            {/* si es accedo o registro eso tbn se pone en el boton del form, y en el titulo */}

        </div>
    )
}

export default SignIn;