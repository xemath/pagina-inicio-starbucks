import React from 'react'

function Botones({imagen, cambiarImagen}) {
    return (
        <ul className="botones">
            {
                imagen.map((img)=>{
                return(
                    <li><img src={img.thumb} alt="" onClick={()=>cambiarImagen(img.imagen,img.color)} /></li>
                )    
                })
            }
        </ul>
    )
}

export default Botones
