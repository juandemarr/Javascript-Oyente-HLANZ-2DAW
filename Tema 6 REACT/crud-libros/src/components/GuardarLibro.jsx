import React, { useState } from 'react'
import librosServicios from "../helpers/tareas-servicios";

const GuardarLibro = () => {
    //--------------declaracion de estados------------
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    //para los errores crear un estado mensaje
    const [error, setError] = useState("");

    //-------------funciones adicionales (eventos)---------
    const handleSubmit = async(e)=>{ //async porque la funcion de añadir libro la hara google cuando pueda, por lo que en add ponemos await
        e.preventDefault();
        const libroNuevo={
            titulo, //este titulo lo coge de la variable creada arriba
            autor,
            descripcion
        };

        //comprueba si no hay campos vacios

        //guardo el libro nuevo. Comprobar que no este guardado previamente
        const comprobarLibro = doc(db,"libros",titulo)
        if(comprobarLibro){
            await librosServicios.addLibros(libroNuevo);
            setTitulo("");
            setAutor("");
            setDescripcion("");
        }else{
            error("Ya existe el libro");
        }
        
    }
    const handleTitulo = (e)=>{
        setTitulo(e.target.value);
    }
    const handleAutor = (e)=>{
        setAutor(e.target.value);
    }
    const handleDescripcion = (e)=>{
        setDescripcion(e.target.value);
    }


    //--------------efectos--------------------


    //--------------pintando el contenido-------------
  return (
    <div className="p-4 box">
        <h1>Guardando libro en firebase</h1>
        <form onSubmit={handleSubmit}>{/* esta funcion gestiona tanto el intro como el botton submit, al estar dentro del form */}
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Titulo"
                    value={titulo}
                    onChange={handleTitulo}
                />

            </div>
            <div className="mb-3">
                <label className="form-label">Autor</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Autor"
                    value={autor}
                    onChange={handleAutor}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={handleDescripcion}
                />
            </div>

            <span>{error}</span>

            <div className="btn-group">
                <div className="col-12 m-4">
                    <button className="btn btn-primary " type="submit">Guardar</button>
                    <button className="btn btn-secondary mx-4" type="reset">Limpiar</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default GuardarLibro