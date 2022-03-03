import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apis from '../../helpers/getJSONPlaceholder';

const UserComments = () => {
    //////////////////variables
    const params = useParams();
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);

    ///////////////////funciones
    function handleVolver(){
        navigate("/UserPosts");
    }

    const obtenerComentarios = () => {
        apis.apiComments(params.idUser).then((data)=>{
            setComments(data);
        })
    }

    /////////////////////efectos
    useEffect(() => {
        obtenerComentarios();
    }, [params])
    

    ///////////////////pintado
    return (
        <section>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                    {comments.map((comment)=>(
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
                
            </div>
            <button onClick={handleVolver}>Volver</button>
        </section>
    )
}

export default UserComments