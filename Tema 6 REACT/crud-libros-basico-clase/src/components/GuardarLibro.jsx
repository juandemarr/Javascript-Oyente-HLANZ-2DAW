import React, { useEffect, useState } from "react";
import librosServicios from "../helpers/tareas-servicios";

const GuardarLibro = ({ libroGlobal, setLibroGlobal }) => {
  // ********* declaración de estados*************
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // ------------ funciones adicionales (eventos) ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    // ------------ todos los campos han de estar rellenos --------------------------------

    if (titulo === "" || autor === "" || descripcion === "") {
      alert("Debes de rellenar todos los campos");
      return;
    }
    // si estoy aquí los campos están rellenos luego llamo a guardarCargarLibros
    guardarCargarLibros();
  };

  const guardarCargarLibros = async () => {
    const libroNuevo = {
      titulo,
      autor,
      descripcion,
    };
    // Si hay algo en el id del estado global libroGlobal("" o undefined) quiere decir que he
    // pulsado en editar a través del componente CargarLibros.

    if (libroGlobal.id !== "" && libroGlobal.id !== undefined) {
      // ------------- quiero editar. ----------
      try {
        await librosServicios.updateLibro(libroGlobal.id, libroNuevo);
      } catch (error) {
        console.log("Error al actualizar un libro", error.message);
      }
    } else {
      // --------- quiero añadir. ------------------
      try {
        // aquí debería comprobar si el libro está repetido o no  **** FALTA POR HACER **** .
        // const verifica = await librosServicios.getLibroNombre(titulo);
        // if (verifica.docs[0].data().titulo === titulo) {
        //   alert("libro repetido...");
        //   return;
        // }
        await librosServicios.addLibros(libroNuevo);
      } catch (error) {
        console.log("Error al añadir un libro", error.message);
      }
    }

    // limpio los campos input cambiando su estado a "". Recuerdo que los estados están ligados
    // a los input a través del value de cada input y del evento onChange.
    // reseteamos los estados y el estadoGlobal
    setTitulo("");
    setAutor("");
    setDescripcion("");
    setLibroGlobal({
      id: "",
      data: { titulo: "", autor: "", descripcion: "" },
    });
  };

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const handleAutor = (e) => {
    setAutor(e.target.value);
  };
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  // ------------- efectos  ----------------
  useEffect(() => {
    setTitulo(libroGlobal.data.titulo);
    setAutor(libroGlobal.data.autor);
    setDescripcion(libroGlobal.data.descripcion);
  }, [libroGlobal]);

  // pintando el contenido
  return (
    <div className="p-4 box">
      <h1>Guardando libro en Firebase</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título"
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
          <label className="form-label">Descripción</label>
          <input
            type="text"
            className="form-control"
            placeholder="Descripción"
            value={descripcion}
            onChange={handleDescripcion}
          />
        </div>
        <div className="btn-group">
          <div className="col-12 m-4">
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
            <button className="btn btn-secondary mx-4" type="reset">
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default GuardarLibro;
