import React, {useState} from 'react'

function Header() {
    const [activo, setActivo] = useState(false)
    const mostrarMenu = ()=>{
        setActivo(!activo)
    }
    return (
        <header>
            <a href=""><img src="/imagenes/logo.png" alt=""  className="logo"/></a>
            <div className={activo?'toggle active': 'toggle'} onClick={mostrarMenu}></div>
            <ul className={activo?'navegacion active':'navegacion'}>
                <li><a href="#" onClick={mostrarMenu}>Inicio</a></li>
                <li><a href="#" onClick={mostrarMenu}>Noticias</a></li>
                <li><a href="#" onClick={mostrarMenu}>Productos</a></li>
                <li><a href="#" onClick={mostrarMenu}>Contactame</a></li>
            </ul>
        </header>
    )
}

export default Header
