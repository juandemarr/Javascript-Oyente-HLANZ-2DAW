import React, { useEffect, useState } from "react";
import librosServicios from "../helpers/tareas-servicios";

const CargarLibros = ({ libroGlobal, setLibroGlobal }) => {
  // *************** estados *******************************
  // estado global usado para el libro a editar o a insertar.

  const [todosLosLibros, setTodosLosLibros] = useState([]);

  // otras funciones ----------------------------------------------------------------
  const traeTodosLosLibros = async () => {
    // trae todos los libros de firebase. (uso try catch para gestionar los errores de la promesa.)
    try {
      const libros = await librosServicios.getLibros(); // ahora todos los libros están en la variable libros.
      /*
        RECUERDO que mi objeto debería ser: {id:mi_id,
                                             data: info_del_libro
                                            }                     
    Guardo los libros con la estructura que yo quiero, porque la que me da Firebase en una estructura
    menos clara... Pero lo hago por mera comodidad para mí nada más.
    Además los guardo en la variable global todosLosLibros a través de su estado correspondiente SetTodosLosLibros.

    */
      setTodosLosLibros(
        libros.docs.map((libro) => ({
          id: libro.id,
          data: libro.data(),
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // ------------- funciones handler --------------------------

  const handleEliminar = async (id) => {
    try {
      await librosServicios.deleteLibro(id);
      setLibroGlobal({
        id: "",
        data: { titulo: "", autor: "", descripcion: "" },
      });
    } catch (error) {
      console.log("Error en handleEliminar:", error);
    }
  };

  const handleEditar = (libro) => {
    setLibroGlobal(libro);
  };

  // ------------------- efectos ----------------------------------------------------------------

  useEffect(() => {
    // a través de este efecto cargo todos los libros al comienzo del pintado del componente CargarLibros
    traeTodosLosLibros();
  }, [libroGlobal]);

  //------------- pintamos contenido -------------
  return (
    <div className="card m-1 align-middle">
      <h5 className="card-header"> Libros CRUD</h5>
      <div className="card-body">
        <div className="mb-2">
          <div className="btn btn-dark" onClick={traeTodosLosLibros}>
            Refrescar
          </div>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>TÍTULO</th>
              <th>AUTOR</th>
              <th>DESCRIP</th>
              <th>OPCIONES</th>
            </tr>
          </thead>
          <tbody>
            {/* A través de un map pinto cada libro que tengo almacenado en todosLosLibros */}
            {todosLosLibros.map((libro, index) => {
              return (
                <tr key={libro.id}>
                  <td>{index + 1}</td>
                  <td>{libro.data.titulo}</td>
                  <td>{libro.data.autor}</td>
                  <td>{libro.data.descripcion}</td>
                  <td>
                    <div className="center">
                      <div className="btn-group" role="group">
                        <button
                          className="btn btn-danger"
                          value={libro.id}
                          onClick={(e) => handleEliminar(libro.id)}
                        >
                          Eliminar
                        </button>
                        <button
                          className="btn btn-success mx-2"
                          onClick={(e) => handleEditar(libro)}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CargarLibros;
