import React, {useState} from "react";
import "./ImagenesAleatorias.css";

const ImagenesAleatorias = (props) => {
    //Parte funcional de mi componente
    const[enabled,setEnabled] = useState(true);

    const src = props.numero + ".jpg";

    let classNameImg = enabled ? "" : "disabled"; //Al hacer click, cambia la variable enable, la cual segun sea true o false,
                                                  // asigna un nombre a la clase de la imagen u otro (disabled)

    let classNamePicture = "";
    
    if(props.size === "small"){
        classNamePicture = "is-small";
    }else if(props.size === "large"){
        classNamePicture = "is-large";
    }

    const cambiar = () => {
        setEnabled(!enabled);
    }

    //Parte de pintado
    return (
        <picture className={classNamePicture}>
            {/* <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="women" /> */}
            <img src={src} alt="Shao" className={classNameImg} onClick={cambiar}/>
            <h3>{props.nombre}</h3>
        </picture>
    );
};
ImagenesAleatorias.defaultProps = {
    numero : 1,
}
export default ImagenesAleatorias;