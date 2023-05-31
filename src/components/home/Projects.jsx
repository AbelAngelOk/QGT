import './projects.css';
import '../styles.css';
import bars from '../../assets/img/bars.svg';
import {useState} from 'react';

import projects from './projects.json';
import logoSeguridad from '../../assets/img/seguridad.svg';
import logoEducation from '../../assets/img/educacion.svg';
import logoImpositivo from '../../assets/img/impositivo.svg';
import logoSalud from '../../assets/img/salud.svg';
import logoNull from '../../assets/img/seguridad.svg';

const urlImagenes = [logoSeguridad, logoImpositivo, logoSalud, logoEducation, logoNull]

export function Projects () {
    const [contenidoRecuadro, setContenidoRecuadro] = useState(<ContenidoDetalleProyecto titulo={projects[0].titulo} descripccion={projects[0].description} imagen={urlImagenes[0]} />);
    const [cajaIluminada, setCajaIluminada] = useState(0);

    const titulo_de_seccion_proyectos = "Nuestras Propuestas";
    const descripcion_de_proyectos = "Nuestro compromiso es mejorar la calidad de vida de cada ciudadano de Quilmes. Nuestra misión consiste en impulsar los aspectos fundamentales, como la seguridad, la educación, el fomento de la industria y el enriquecimiento de Quilmes. Para lograrlo, hemos planificado múltiples proyectos que, individualmente, contribuyen significativamente a la calidad de vida y, en conjunto, se refuerzan mutuamente para mejorar todos los aspectos.";
    
    //Actualiza el componente en la caja de detalle de la sección proyectos, llama a la función para manejar la iluminación
    const manejarClick = (componente, index) => {
        setContenidoRecuadro(componente);
        setCajaIluminada(index);
    };
    
    return (
        <section className='proyectos'>
            <ul className='proyectos--inner'>
                <li className='proyectos--title'>
                    <h1> { titulo_de_seccion_proyectos }</h1>
                </li>
                <li className='proyectos--description'>
                    <p> { descripcion_de_proyectos } </p>
                </li>
                <li className='proyectos--tab'>
                    <img src={bars} className='proyectos--tab--icon' alt="barras"/>
                </li>
                <li className='proyectos--containerBox'>
                    <ul className='proyectos--containerBox__ul'>
                        <CreateBoxes cajaIluminada={cajaIluminada}  manejarClick={manejarClick}/>
                    </ul>
                </li>
                <li className='proyectos--detalle'>
                    <div className='proyectos--TablaDetalle'>
                        {contenidoRecuadro}            
                    </div>
                </li>
            </ul>
        </section>
    );
};

const CreateBoxes = (props) => {
    return projects.map( (p, key) => {                      
        return (
            <li key={key} className={`proyectos--box ${props.cajaIluminada === key ? "sombreado" : "" }`} onClick={ () => props.manejarClick(<ContenidoDetalleProyecto titulo={p.titulo} descripccion={p.description} imagen={urlImagenes[p.id]} />, key) }> 
                { contenidoCajasSeccionProyectos(urlImagenes[p.id], p.titulo) } 
            </li> 
        )
    })
};

//Proposito: dada un imagen, un titulo y una descripcion crea el contenido de la caja de detalle de la seccion proyectos.

const ContenidoDetalleProyecto = (props) => {
    return(
        <section className='DetalleProyecto'>
            <div className='DetalleProyecto--derecha'>
                <div className='DetalleProyecto--derecha--contenedorDeImagen'>
                    <img src={props.imagen} className='DetalleProyecto--Icon' alt="proyecto-icono" />
                </div>
            </div>
            <div className='DetalleProyecto--izquierda'>
                <div className='DetalleProyecto--up'> <h6>{props.titulo}</h6> </div>
                <div className='DetalleProyecto--down'> <p>{props.descripccion}</p> </div>
            </div>
        </section>
    );
};

//Proposito: dada un titulo e imagen crea el contenido de una caja de la seccion proyectos.

const contenidoCajasSeccionProyectos = (logo, titular) => {
    return (
        <section className='proyectos--box'>
            <div className='proyectos--box--contenedorDeImagen'><img className='proyectos--box--icon' src={logo} alt="proyecto-icono" /></div>
            <div className='proyectos--box--titulo'><p>{titular}</p></div>
        </section>
    );
};