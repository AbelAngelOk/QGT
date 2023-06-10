import "./banner.css";
import b from "./banner.json";

export function Banner () {

    return (
        <section className="banner">
            <div className='banner--title'><h1> { b.title } </h1></div>
            <div className='banner--description'><p>{ b.description }</p></div>
        </section>
    );
};