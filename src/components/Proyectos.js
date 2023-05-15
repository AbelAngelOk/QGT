import './proyectos.css';
import './styles.css';
import bars from './assets/img/bars.svg';
import patrulla from './assets/img/Patrull.webp';
import React,{useState} from 'react';

import logoSeguridad from './assets/img/seguridad.svg';
import logoEducation from './assets/img/educacion.svg';
import logoImpositivo from './assets/img/impositivo.svg';
import logoSalud from './assets/img/salud.svg';
import logoNull from './assets/img/seguridad.svg';


const box01 = document.getElementById('box01');
const box02 = document.getElementById('box02');
const box03 = document.getElementById('box03');
const box04 = document.getElementById('box04');
const box05 = document.getElementById('box05');

const cajas = [box01, box02, box03, box04, box05];

const titulo_de_seccion_proyectos = "Nuestras Propuestas";
const descripcion_de_proyectos = "Nuestro compromiso es mejorar la calidad de vida de cada ciudadano de Quilmes. Nuestra misión consiste en impulsar los aspectos fundamentales, como la seguridad, la educación, el fomento de la industria y el enriquecimiento de Quilmes. Para lograrlo, hemos planificado múltiples proyectos que, individualmente, contribuyen significativamente a la calidad de vida y, en conjunto, se refuerzan mutuamente para mejorar todos los aspectos.";
const titulo_de_proyecto_seguridad = "Garantizar Seguridad";
const descripccion_de_proyecto_seguridad = "Proponemos implementar una política de 'Tolerancia Cero' en materia de seguridad. Mantener un patrullaje constante las 24 horas del día, los 7 días de la semana en todos los barrios. Que nuestros policías estén debidamente armados y cuentan con los permisos necesarios para actuar en caso de emergencia. Además, queremos incorporar pistolas TASER como herramienta para reducir eficazmente a los delincuentes";
const titulo_de_proyecto_impositivo = "Bajar Impuestos";
const descripccion_de_proyecto_impositivo = "Nuestro compromiso es eliminar los impuestos innecesarios y reducir las tasas municipales para aliviar la carga financiera de nuestros ciudadanos. Nos aseguraremos de que los recursos recaudados se destinen únicamente a garantizar la seguridad, la limpieza, la salud y la educación en nuestra comunidad. Queremos asegurar que cada centavo de los impuestos se utilice de manera eficiente y efectiva para mejorar la calidad de vida de nuestros ciudadanos.";
const titulo_de_proyecto_salud = "Hospitales Dignos";
const descripccion_de_proyecto_salud = "Llevaremos a cabo una completa renovación de las salas de guardia para brindar un entorno más cómodo y moderno a nuestros pacientes. Implementaremos un sistema de turnos vía celular para agilizar y simplificar el proceso de programación de citas médicas.Además, nos enfocaremos en garantizar la provisión y control adecuado de insumos hospitalarios, asegurando que los recursos necesarios estén disponibles en todo momento. Asimismo, realizaremos reparaciones en los edificios que se encuentren deteriorados, para asegurar un entorno seguro y funcional para pacientes y personal médico.";
const titulo_de_proyecto_educacion = "Educación de Calidad";
const descripccion_de_proyecto_educacion = "Nos comprometemos a proporcionar aulas calefaccionadas y completamente equipadas para facilitar un entorno de aprendizaje óptimo y promover el trabajo pedagógico de calidad. Además, nos aseguraremos de que nuestros edificios escolares cumplan con todas las normas de seguridad y estén en condiciones óptimas de salubridad. Nos enfocaremos en realizar las reparaciones necesarias y mantener un entorno escolar seguro y saludable para nuestros estudiantes y personal docente.";

export function Proyectos () {

    // Proposito: dado el evento click en una caja de proyectos ilumina la caja y escribe en Tabla con detalles.
    const cuandoRecibeClick = (element) => {       
        quitarSombreadoEnCadaCaja();
        agregarSobreadoACaja(element);
    }
    
    //Proposito: remueve el sombreado de todas las cajas de proyectos.
    const quitarSombreadoEnCadaCaja = () => {
        cajas.forEach(element => {
            element.classList.remove("sombreado");
        });
    }
    
    //proposito: ilumina la caja de proyecto "element".
    const agregarSobreadoACaja = (element) => {
        element.classList.add("sombreado");
    }
    
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
                    <img src={bars} className='proyectos--tab--icon'/>
                </li>
                <li className='proyectos--containerBox'>
                    <ul className='proyectos--containerBox__ul'>
                        <li id='box01' className='proyectos--box' onClick={() => cuandoRecibeClick(box01)}> { contenido_caja_de_seccion_proyectos(logoSeguridad, titulo_de_proyecto_seguridad) } </li>
                        <li id='box02' className='proyectos--box' onClick={() => cuandoRecibeClick(box02)}> { contenido_caja_de_seccion_proyectos(logoImpositivo, titulo_de_proyecto_impositivo) } </li>
                        <li id='box03' className='proyectos--box' onClick={() => cuandoRecibeClick(box03)}> { contenido_caja_de_seccion_proyectos(logoSalud, titulo_de_proyecto_salud) } </li>
                        <li id='box04' className='proyectos--box' onClick={() => cuandoRecibeClick(box04)}> { contenido_caja_de_seccion_proyectos(logoEducation, titulo_de_proyecto_educacion) } </li>
                        <li id='box05' className='proyectos--box' onClick={() => cuandoRecibeClick(box05)}> { contenido_caja_de_seccion_proyectos(logoNull, "proximamente...") } </li>
                    </ul>
                </li>
                <li className='proyectos--detalle'>
                    <div className='proyectos--TablaDetalle'>
                        { contenido_detalle_Proyecto(logoSeguridad, titulo_de_proyecto_seguridad, descripccion_de_proyecto_seguridad) }            
                    </div>
                </li>
            </ul>
        </section>

    );
};

//Proposito: dada un imagen, un titulo y una descripcion crea el contenido de la caja de detalle de la seccion proyectos.
const contenido_detalle_Proyecto = (imagen, titular, descripcion) => {
    return (
        <section className='DetalleProyecto'>
            <div className='DetalleProyecto--derecha'>
                <div className='DetalleProyecto--derecha--contenedorDeImagen'>
                    <img src={imagen} className='DetalleProyecto--Icon'/>
                </div>
            </div>
            <div className='DetalleProyecto--izquierda'>
                <div className='DetalleProyecto--up'> <h6>{titular}</h6> </div>
                <div className='DetalleProyecto--down'> <p>{descripcion}</p> </div>
            </div>
        </section>
    )
}

//Proposito: dada un titulo e imagen crea el contenido de una caja de la seccion proyectos.
const contenido_caja_de_seccion_proyectos = (logo, titular) => {
    return (
        <section className='proyectos--box'>
            <div className='proyectos--box--contenedorDeImagen'><img className='proyectos--box--icon' src={logo}/></div>
            <div className='proyectos--box--titulo'><p>{titular}</p></div>
        </section>
    )
}







































function proyecto01 () {
    return (
        <div id='proyecto01' className='proyecto01'>
            <div className='proyectos--boxImg'><img src={patrulla}/></div>
            <h4>Garantizar seguridad</h4>
        </div>
    );
}

function proyecto02 () {
    return (
        <div id='proyecto01' className='proyecto01'>
            <div className='proyectos--boxImg'><img src={patrulla}/></div>
            <h4>Garantizar seguridad</h4>
        </div>
    );
}

function proyecto03 () {
    return (
        <div id='proyecto01' className='proyecto01'>
            <div className='proyectos--boxImg'><img src={patrulla}/></div>
            <h4>Garantizar seguridad</h4>
        </div>
    );
}

function proyecto04 () {
    return (
        <div id='proyecto01' className='proyecto01'>
            <div className='proyectos--boxImg'><img src={patrulla}/></div>
            <h4>Garantizar seguridad</h4>
        </div>
    );
}

function proyecto05 () {
    return (
        <div id='proyecto01' className='proyecto01'>
            <div className='proyectos--boxImg'><img src={patrulla}/></div>
            <h4>Garantizar seguridad</h4>
        </div>
    );
}