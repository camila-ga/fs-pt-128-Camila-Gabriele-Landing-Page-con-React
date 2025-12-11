import React from 'react'

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3 mt-4">
			<div className="container-fluid py-5 rounded-3" style={{ backgroundColor: '#a5d8e9ff' }}>
				<h1 className="display-5 fw-bold">¡Bienvenido a los lugares mas lindos de Argentina!</h1>
				<p className="col-md-8 fs-4">Y es que Argentina es un país que lo tiene todo: glaciares, cataratas, desiertos de colores y ciudades que te pueden parecer que tienen más encanto que ninguna otra. Aqui una lista de los 8 lugares imprescindibles que ver en Argentina. </p>
				<button className="btn btn-dark btn-lg" type="button">Conoce más</button>
			</div>
		</div>

	)
}

export default Jumbotron