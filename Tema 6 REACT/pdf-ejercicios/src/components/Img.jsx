import React, { useState } from 'react';

const Img = () => {
    const [opacity,setOpacity] = useState(1);

    function handleOpacity(){
        
        document.getElementById("imgAhsoka").style.opacity=opacity;
        setOpacity(1);
        console.log(opacity);
    }
    function handleOpacityReverse(){
        
        document.getElementById("imgAhsoka").style.opacity=opacity;
        setOpacity(0.5);
        console.log(opacity);
    }

    return (
        <div>
            <img id="imgAhsoka" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px"}} 
                onMouseEnter={handleOpacity}
                onMouseLeave={handleOpacityReverse}
                ></img>
                <h2>Opacity: {opacity}</h2>
        </div>
    );
};

export default Img;
