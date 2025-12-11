
import React from 'react';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";


const Home = () => {
    const lugaresArgentina = [
        {
            id: 1,
            lugar: "Glaciar Perito Moreno",
            descripcion: "Es una de las maravillas naturales más impresionantes del mundo y el principal atractivo del Parque Nacional Los Glaciares, ubicado en la provincia de Santa Cruz, en la Patagonia Argentina",
            imagen: "https://images.unsplash.com/photo-1577373482643-5c7ccf8f0ac9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            lugar: "Cataratas del Iguazu",
            descripcion: "¡Son una de las Siete Maravillas Naturales del Mundo y una experiencia inolvidable! Se localizan en el Río Iguazú, en la frontera entre Argentina y Brasil, y están conformadas por 275 saltos de agua.",
            imagen: "https://images.unsplash.com/photo-1538703012804-b74999aa11b9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            lugar: "Quebrada de Humahuaca",
            descripcion: "Es un espectacular valle montañoso ubicado en la provincia de Jujuy, en el Noroeste Argentino (NOA). Es un destino de incalculable valor paisajístico, cultural e histórico.Fue declarada Patrimonio Cultural de la Humanidad por la UNESCO en 2003.",
            imagen: "https://images.unsplash.com/photo-1545889240-1e3233044147?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            lugar: "Salinas Grandes ",
            descripcion: "Las Salinas Grandes son un vasto salar ubicado en la región de la Puna, en el límite entre las provincias de Jujuy y Salta, a unos 3.450 metros sobre el nivel del mar (msnm). Son reconocidas como una de las Siete Maravillas Naturales de Argentina.",
            imagen: "https://images.unsplash.com/photo-1654760424207-60efd855cddd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
         {
            id: 5,
            lugar: "Buenos Aires",
             descripcion: "La cultura de la Ciudad Autónoma de Buenos Aires (CABA), conocida como 'La Porteña', es una de las más ricas y diversas de América Latina, con una fuerte influencia europea (principalmente italiana y española) mezclada con tradiciones criollas. Por su intensa actividad, a menudo se la llama 'La París del Sur'.",
             imagen: "https://images.unsplash.com/photo-1725499267114-15531716d101?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
         {
            id: 6,
            lugar: "Mendoza ",
             descripcion: "Capital Mundial del Vino: Es famosa por producir dos tercios de la cosecha argentina, siendo el vino Malbec su variedad insignia. Ofrece numerosas bodegas para degustaciones y visitas.",
             imagen: "https://images.unsplash.com/photo-1546863340-7e4e97e46f42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
         {
            id: 7,
            lugar: "San Carlos de Bariloche ",
            descripcion: "Es la capital turística de la Patagonia argentina y un destino de fama mundial, conocido por sus lagos glaciares, montañas nevadas, bosques y, por supuesto, su delicioso chocolate.",
            imagen: "https://images.unsplash.com/photo-1651640821812-6328be4b6994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
         {
            id: 8,
            lugar: "Salta",
             descripcion: "La provincia de Salta, cuya capital es Salta (Ciudad de Salta), es famosa por su arquitectura colonial bien conservada, su fuerte tradición cultural (folklore) y sus paisajes geológicos espectaculares. Su apodo es 'Salta, La Linda'.",
             imagen: "https://images.unsplash.com/photo-1600123865667-a55ce543b521?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];


    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    {lugaresArgentina.map(lugares => (
                        <Card key={lugares.id} lugares={lugares} />
                    )
                    )}

                </div>
            </div>


        </>
    );
};
export default Home;



