import React, { useState } from 'react';

const Img = () => {
    const [opacity,setOpacity] = useState(1);
    //const img = document.getElementById("imgAhsoka"); //la primera vez da error y no lo encuentra
    function handleOpacity(){
        //setOpacity((prev)=>prev-0.5);
        setOpacity(0.5);
        document.getElementById("imgFlecha").style.opacity=opacity;
    }
    function handleOpacityReverse(){
        setOpacity(1);
        document.getElementById("imgFlecha").style.opacity=opacity;
    }

    return (
        <div>
            <img id="imgFlecha" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px"}} 
                onMouseEnter={handleOpacity}
                onMouseLeave={handleOpacityReverse}
                ></img>
                <h2>Opacity: {opacity}</h2>
        </div>
    );
};

export default Img;
