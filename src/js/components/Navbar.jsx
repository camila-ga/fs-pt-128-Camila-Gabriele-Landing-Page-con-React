import React from 'react'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-ligth">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Viaje Express</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Lugares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recomendaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Excursiones</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


//array de objetos - en home - props a las card