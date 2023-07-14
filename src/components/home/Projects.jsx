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
        <section id='proyectos' className='flex w-full h-auto flex-wrap justify-center items-center py-5 bg-slate-200 dark:bg-slate-600'>
            <ul id='proyectos--inner' className='flex w-full h-auto flex-col items-center gap-10'>
                <li id='proyectos--title' className='flex w-10/12 h-auto flex-wrap justify-center items-center'>
                    <h1 className='text-cyan-950 dark:text-cyan-50 m-0 mb-4 text-6xl leading-none tracking-tight'> { titulo_de_seccion_proyectos }</h1>
                </li>
                <li id='proyectos--description' className='flex w-10/12 h-auto flex-wrap justify-center items-center'>
                    <p className='text-cyan-950 dark:text-cyan-50'> { descripcion_de_proyectos } </p>
                </li>
                <li id='proyectos--tab' className='w-[50px]'>
                    <img src={bars} id='proyectos--tab--icon' className='' alt="barras"/>
                </li>
                <li id='proyectos--containerBox' className='flex w-full h-auto flex-wrap justify-center items-center'>
                    <ul id='proyectos--containerBox__ul' className='flex flex-row justify-between w-11/12'>
                        <CreateBoxes cajaIluminada={cajaIluminada}  manejarClick={manejarClick}/>
                    </ul>
                </li>
                <li id='proyectos--detalle' className='flex w-full h-auto flex-wrap justify-center items-center'>
                    <div id='proyectos--TablaDetalle' className='w-11/12 h-[50vh] rounded-lg shadow-lg bg-slate-400 dark:bg-slate-800 my-4'>
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
            <li key={key} id='proyectos--box' className={`w-[15vw] h-[15vw] rounded-lg shadow-lg shadow-slate-950 dark:shadow-slate-50 bg-slate-400 dark:bg-slate-800 flex-col items-center justify-evenly flex cursor-pointer  ${props.cajaIluminada === key ? "shadow-lg shadow-slate-50 dark:shadow-slate-950" : "" }`} onClick={ () => props.manejarClick(<ContenidoDetalleProyecto titulo={p.titulo} descripccion={p.description} imagen={urlImagenes[p.id]} />, key) }> 
                { contenidoCajasSeccionProyectos(urlImagenes[p.id], p.titulo) } 
            </li> 
        )
    })
};

//Proposito: dada un imagen, un titulo y una descripcion crea el contenido de la caja de detalle de la seccion proyectos.

const ContenidoDetalleProyecto = (props) => {
    return(
        <section id="DetalleProyecto" className='w-full h-full flex flex-row flex-wrap justify-evenly'>
            <div id='DetalleProyecto--derecha' className='w-auto h-full flex justify-center items-center'>
                <div id='DetalleProyecto--derecha--contenedorDeImagen' className='w-auto h-1/3'>
                    <img src={props.imagen} id='DetalleProyecto--Icon' className='' alt="proyecto-icono" />
                </div>
            </div>
            <div id='DetalleProyecto--izquierda' className='h-full w-4/6 flex flex-wrap content-center gap-1'>
                <div id='DetalleProyecto--up' className='w-full h-auto'> 
                    <h6 className='text-cyan-950 dark:text-cyan-50'>{props.titulo}</h6> 
                </div>
                <div id='DetalleProyecto--down' className='w-full h-auto'> 
                    <p className='text-cyan-950 dark:text-cyan-50'>{props.descripccion}</p> 
                </div>
            </div>
        </section>
    );
};

//Proposito: dada un titulo e imagen crea el contenido de una caja de la seccion proyectos.

const contenidoCajasSeccionProyectos = (logo, titular) => {
    return (
        <section id='proyectos--box' className='w-[15vw] h-[15vw] rounded-lg shadow-lg shadow-slate-950 dark:shadow-slate-50 bg-slate-400 dark:bg-slate-800 flex-col items-center justify-evenly flex cursor-pointer'>
            <div id='proyectos--box--contenedorDeImagen' className='w-1/4 h-1/4'><img id='proyectos--box--icon' className='' src={logo} alt="proyecto-icono" /></div>
            <div id='proyectos--box--titulo' className='w-auto h-auto'>
                <p className='text-cyan-950 dark:text-cyan-50'>{titular}</p>
            </div>
        </section>
    );
};