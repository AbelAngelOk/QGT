import bars from '../../assets/img/bars.svg'
import { useState } from 'react'

import projects from './projects.json'
import logoSeguridad from '../../assets/img/seguridad.svg'
import logoEducation from '../../assets/img/educacion.svg'
import logoImpositivo from '../../assets/img/impositivo.svg'
import logoSalud from '../../assets/img/salud.svg'

const urlImagenes = [logoSeguridad, logoImpositivo, logoSalud, logoEducation, logoSeguridad]

export function Projects () {
  const [contenidoRecuadro, setContenidoRecuadro] = useState(<ContenidoDetalleProyecto titulo={projects[0].titulo} descripccion={projects[0].description} imagen={urlImagenes[0]} />)
  const [cajaIluminada, setCajaIluminada] = useState(0)

  const tituloDeSeccionProyectos = 'Nuestras Propuestas'
  const descripcionProyectos = 'Nuestro compromiso es mejorar la calidad de vida de cada ciudadano de Quilmes. Nuestra misión consiste en impulsar los aspectos fundamentales, como la seguridad, la educación, el fomento de la industria y el enriquecimiento de Quilmes. Para lograrlo, hemos planificado múltiples proyectos que, individualmente, contribuyen significativamente a la calidad de vida y, en conjunto, se refuerzan mutuamente para mejorar todos los aspectos.'

  // Actualiza el componente en la caja de detalle de la sección proyectos, llama a la función para manejar la iluminación
  const manejarClick = (componente, index) => {
    setContenidoRecuadro(componente)
    setCajaIluminada(index)
  }

  return (
    <section className='py-0 px-[5%]'>
      <ul className='flex flex-col gap-[10vh] w-full h-auto wrap justify-center items-center'>
        <li className='flex w-full h-auto flex-wrap justify-center items-center'>
          <h1> {tituloDeSeccionProyectos}</h1>
        </li>
        <li className='flex w-full h-auto flex-wrap justify-center items-center'>
          <p> {descripcionProyectos} </p>
        </li>
        <li className='flex w-12 h-auto flex-wrap justify-center items-center'>
          <img src={bars} className='invert-[95%] sepia-[42%] saturate-[5365%] hue-rotate-15 brightness-[106] contrast-[107%]' alt='barras' />
        </li>
        <li className='flex w-full h-auto flex-wrap justify-center items-center'>
          <ul className='flex flex-row justify-between w-[90%]'>
            <CreateBoxes cajaIluminada={cajaIluminada} manejarClick={manejarClick} />
          </ul>
        </li>
        <li className='flex w-full h-auto flex-wrap justify-center items-center'>
          <div className='w-[90%] h-[50vh] rounded-md shadow-[5px_5px_12px_0_rgba(255,255,255,0.1)] bg-[rgb(25,27,33)] mx-0 my-[10vh]'>
            {contenidoRecuadro}
          </div>
        </li>
      </ul>
    </section>
  )
};

const CreateBoxes = (props) => {
  return projects.map((p, key) => {
    return (
      <li key={key} className={`w-[15vw] h-[15vw] rounded-md bg-[rgb(25,27,33)] flex-col items-center justify-evenly flex cursor-pointer ${props.cajaIluminada === key ? 'shadow-[5px_5px_12px_0_rgba(255,255,255,1)]' : 'shadow-[5px_5px_12px_0_rgba(255,255,255,0.01)]'}`} onClick={() => props.manejarClick(<ContenidoDetalleProyecto titulo={p.titulo} descripccion={p.description} imagen={urlImagenes[p.id]} />, key)}>
        {contenidoCajasSeccionProyectos(urlImagenes[p.id], p.titulo)}
      </li>
    )
  })
}

// Proposito: dada un imagen, un titulo y una descripcion crea el contenido de la caja de detalle de la seccion proyectos.

const ContenidoDetalleProyecto = (props) => {
  return (
    <section id="DetalleProyecto" className='w-full h-full flex flex-row wrap justify-evenly'>
      <div id='DetalleProyecto--derecha' className='w-auto h-full flex justify-center items-center py-0 px-[5vw]'>
        <div id='DetalleProyecto--derecha--contenedorDeImagen' className='w-auto h-[30%]'>
          <img id='DetalleProyecto--Icon' src={props.imagen} className='invert-[95%] sepia-[42%] saturate-[5365%] hue-rotate-15 brightness-[106] contrast-[107%]' alt='proyecto-icono' />
        </div>
      </div>
      <div id='DetalleProyecto--izquierda' className='h-full w-[65%] flex flex-wrap content-center gap-[2vh]'>
        <div id='DetalleProyecto--up' className='w-full h-auto'> <h6>{props.titulo}</h6> </div>
        <div className='w-full h-auto'> <p>{props.descripccion}</p> </div>
      </div>
    </section>
  )
}

// Proposito: dada un titulo e imagen crea el contenido de una caja de la seccion proyectos.

const contenidoCajasSeccionProyectos = (logo, titular) => {
  return (
    <section id='proyectos--box' className='w-[15vw] h-[15vw] rounded-md bg-[rgb(25,27,33)] flex-col items-center justify-evenly flex cursor-pointer'>
      <div id='proyectos--box--contenedorDeImagen'  className='w-1/4 h-1/4'><img className='invert-[95%] sepia-[42%] saturate-[5365%] hue-rotate-15 brightness-[106] contrast-[107%]' src={logo} alt='proyecto-icono' /></div>
      <div id='proyectos--box--titulo' className='w-auto h-auto'><p>{titular}</p></div>
    </section>
  )
}
