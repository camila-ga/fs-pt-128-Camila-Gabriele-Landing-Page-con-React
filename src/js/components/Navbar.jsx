import React from 'react'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><strong>Viaje Express</strong></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Lugares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Recomendaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Excursiones</a>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Mas informacion" aria-label="Search"></input>
                        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


//array de objetos - en home - props a las card