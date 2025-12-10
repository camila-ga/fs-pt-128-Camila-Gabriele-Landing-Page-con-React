import React from 'react'

const Card = () => {
    const Data = [
        {
            Image1: "https://images.unsplash.com/photo-1577373482643-5c7ccf8f0ac9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
        }
    ];
    return (
        <div className="card w-50">
            <img src={Data.Image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

        </div>
    )
}

export default Card