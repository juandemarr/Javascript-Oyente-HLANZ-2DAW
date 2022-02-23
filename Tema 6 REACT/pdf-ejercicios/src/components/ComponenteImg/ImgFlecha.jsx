import React, { useEffect, useState } from 'react';

const Img = () => {

    const [opacity, setOpacity] = useState(1);  

    function opacityOn(){
        setOpacity(0.5);
    }

    function opacityOff(){
        setOpacity(1);
    }

    useEffect(()=>{
        /* if(parseInt(window.getComputedStyle(document.getElementById("imgFlecha")).getPropertyValue("opacity")) === 1){
            opacityOn();
        }else{
            opacityOff();
        } */
        document.getElementById("imgFlecha").style.opacity = opacity;
        console.log("useEffect " + opacity);
    },[opacity]);

    
    return (
        <div>
            <img id="imgFlecha" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px" , opacity : 1}} 
                onMouseEnter={opacityOn} onMouseLeave={opacityOff}
            />
            <h3>Opacity: {opacity}</h3>
        </div>
    );
};

export default Img;
