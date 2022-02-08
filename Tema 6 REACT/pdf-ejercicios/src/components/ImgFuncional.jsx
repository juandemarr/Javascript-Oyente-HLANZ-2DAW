import { useState } from "react";

function ImgFuncional(){
    const [opacity,setOpacity] = useState(1);
    //const img = document.getElementById("imgAhsoka");
    function handleOpacity(){
        setOpacity(0.5);
        document.getElementById("imgFuncional").style.opacity=opacity;
    }
    function handleOpacityReverse(){
        setOpacity(1);
        document.getElementById("imgFuncional").style.opacity=opacity;
    }
    return(
        <div>
            <img id="imgFuncional" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px"}} 
                onMouseEnter={handleOpacity}
                onMouseLeave={handleOpacityReverse}
                ></img>
                <h2>Opacity: {opacity}</h2>
        </div>
    )
}

export default ImgFuncional;