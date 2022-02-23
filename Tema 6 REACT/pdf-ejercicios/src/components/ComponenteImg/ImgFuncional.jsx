import { useEffect, useState } from "react";

function ImgFuncional(){
    const [opacity,setOpacity] = useState(1);
    
    function handleOpacity(){
        setOpacity(0.5);
    }
    function handleOpacityReverse(){
        setOpacity(1);
    }

    useEffect(()=>{
        document.getElementById("imgFuncional").style.opacity=opacity;
    },[opacity])

    return(
        <div>
            <img id="imgFuncional" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px"}} 
                onMouseEnter={handleOpacity}
                onMouseLeave={handleOpacityReverse}
                ></img>
                <h3>Opacity: {opacity}</h3>
        </div>
    )
}

export default ImgFuncional;