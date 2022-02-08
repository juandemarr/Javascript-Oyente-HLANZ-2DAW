import { useState } from "react";
import {useForm} from "react-hook-form";

function FormLogin(){
    const [entradas, setEntradas] = useState([]);
    const {register,handleSubmit, formState:{errors}} = useForm();
    //en register se guardan os datos y los errores asociados

    const onSubmit = (data,e) => { //dos parametros, la data (todos los datos del form) y el evento
        console.log(data);

        e.target.reset();//limpia el form

        setEntradas([...entradas,data]); //guardo en entradas lo que ya tiene más data
        //esto se hace en diferido, despues del console log

        console.log(entradas);
    } 

    return(
        <div className="container my-5">
            <h2 className="mb-3">Iniciar sesion</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5"> {/* este onSubmit es asi si o si */}
                <input 
                    placeholder="Usuario"
                    className="form-control mb-2"
                    name="username"
                    {
                        ...register("username",{//las propiedades las pondra alineadas dentro de la etiqueta input para que el html lo interprete bien, de la forma en la que este programado este react-hook-form
                                                //dos parametros, primero a guardar
                                                //y segundo un objeto con las restricciones
                            required:{value:true,message:"Nombre requerido"},
                        })  
                    }
                />

                <span className="text-danger text-small d-block mb-2">
                {errors?.username?.message} {/* esa ? sirve para preguntar si hay errores, en caso de no existir se sale y no pinta nada */}

                </span> 

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

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

            {/* pintamos los datos almacenados en entradas */}
            <table>
                <tr>
                    <td>{entradas.username}</td>
                    <td>{entradas.email}</td>
                    <td>{entradas.password}</td>
                </tr>
            </table>
            
            
            

        </div>
    )
}

export default FormLogin;