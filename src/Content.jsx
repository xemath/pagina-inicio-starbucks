import React from 'react'

function Content({thumb}) {
    return (
        <div className="content">
            <div className="textBox">
                <h2>No es solo café <br />es <span>Starbucks</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam dicta earum voluptas sint expedita nesciunt, rem quibusdam impedit est distinctio molestias ducimus quae aut natus esse rerum provident pariatur laudantium necessitatibus.</p>
                <a href="#" className="boton">Ver mas</a>
            </div>
            <div className="imgBox">
                <img src={thumb} alt="" />
            </div>
        </div>
    )
}

export default Content
