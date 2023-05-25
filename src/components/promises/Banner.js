import "./banner.css";

export function Banner () {

    const banner_titulo = "Compromisos";
    const banner_descripcion = "Nuestras propuestas y su desarrollo al alcance de todos";

    return (
        <section className="banner">
            <div className='banner--title'><h1>{banner_titulo}</h1></div>
            <div className='banner--description'><p>{banner_descripcion}</p></div>
        </section>
    );
};