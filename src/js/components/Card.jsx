import React from 'react'

const Card = ({ lugares }) => {

    return (
        <div className="col-3 mt-3">
            <div className="card d-flex justify-content-center" style={{ aspectRatio: "3/4", width: "20rem" }}>
                <img src={lugares.imagen} className="card-img-top w-100 h-100 object-fit-cover " alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{lugares.lugar}</h5>
                    <p className="card-text" style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "auto",
                    }}
                    >{lugares.descripcion}</p>
                    <button className="btn btn-dark w-100" style={{ backgroundColor: '#0c88b2ff' }}>Ver mas</button>
                </div>

            </div>
        </div>
    )
}

export default Card