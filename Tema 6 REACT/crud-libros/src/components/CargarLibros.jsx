import React, { useEffect, useState } from 'react'
import librosServicios from "../helpers/tareas-servicios";

const CargarLibros = ({libroGlobal,setLibroGlobal}) => {
    //-------------estados--------------
    const [todosLosLibros, setTodosLosLibros] = useState([]);


    //-------------otras funciones-------
    const traeTodosLosLibros = async () => {
        //trae todos los libros de firebase
        try{
            const libros = await librosServicios.getLibros();
            console.log("LIBBROS DE FIREBASE");
            console.log(libros);
            console.log("El id es: " + libros.docs[0].id);
            console.log("La data está en " + libros.docs[0].data());
            
            //para no usar esta forma dificil de google de traer 
            //la info, crearemos un objeto personalizado para acceder mas facil
            setTodosLosLibros(
                libros.docs.map((libro) => (
                    {
                        id : libro.id,
                        data : libro.data()
                    }
                )
                ) //libros.docs es un array donde esta toda la info
            );
            console.log("LIBBROS DE MI OBJETO CREADO");
            console.log(todosLosLibros);
        }catch(e){
            console.log(e);
        }
        

    }
    ///////////////////////////////////////
    const handleEliminar = async (id) => {
        try{
            await librosServicios.deleteLibro(id);
            traeTodosLosLibros();
        }catch(e){
            console.log("Error en handleEliminar" , e);
        }
    }

    //-------------efectos------------------
    useEffect(() => {
        traeTodosLosLibros();
    }, []);
    

    //-------------pintamos contenido----------
    return (
        <div className="card m-2">
            <h5 className="card-header">Libros CRUD</h5>
            <div className="card-body">
                <div className="btn btn-dark" onClick={traeTodosLosLibros}>Refrescar</div>
            
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TÍTULO</th>
                            <th>AUTOR</th>
                            <th>DESCRIPCION</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todosLosLibros.map((libro, index)=>(
                            <tr key={libro.id}>
                                <td>{index + 1}</td>
                                <td>{libro.data.titulo}</td>
                                <td>{libro.data.autor}</td>
                                <td>{libro.data.descripcion}</td>
                                <td><button className="btn btn-danger" onClick={(e) => handleEliminar(libro.id)}>Eliminar</button></td>
                                <td><button className="btn btn-success" onClick={(e) => setLibroGlobal(libro)}>Editar</button></td>
                                {/* este editar carga los datos del libro en el form de arriba, por eso se pasa al padre el cual pasa ese libro
                                al otro componente, y ya se guardaria */}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CargarLibros