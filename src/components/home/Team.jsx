import ammaturoImg from '../../assets/img/ammaturo_v2.png'
import alfasetti from '../../assets/img/alfasetti.png'
import miembros from './team.json'

const exampleImg03 = 'https://arbusta.net/wp-content/uploads/2023/01/Paula-Cardenau-300x300.png'
const exampleImg04 = 'https://arbusta.net/wp-content/uploads/2023/02/Beatriz-Ponce-de-Leon-300x300.png'
const exampleImg05 = 'https://arbusta.net/wp-content/uploads/2023/02/Karen-Reales-300x300.png'

const images = [ammaturoImg, alfasetti, exampleImg03, exampleImg04, exampleImg05]

const tituloSeccionEquipos = 'Equipo Electoral'

export function Team () {
    return (
        <section id="Team" className="w-full h-auto flex flex-wrap">
            <h1 id="Team-Title" className='w-full text-center pb-3 text-cyan-950 dark:text-yellow-50 text-5xl'> {tituloSeccionEquipos} </h1>
            <ul id="Team-Members" className='w-full h-auto flex flex-row justify-evenly py-5 shadow-sm dark:bg-slate-600 bg-slate-300'>       
                <RenderMembers />
            </ul>
        </section>       
    )
};

const RenderMembers = () => {
    return miembros.map( m => { return member(m) } )
}

//Proposito: dado una imagen, un nombre y un rol completa el contenido del un contenedor de equipo.
const member = (m) => {
    return(
        <section id={"member0" + m.id} className='w-[15vw] h-auto m-0'>
            <img id="member-Img" className='h-[50vh]' src={images[m.id]} alt="imagen-miembro" />
            <ul id="member-info" className='w-4/5 h-auto flex list-none flex-col gap-[1vh]'>
                <li className='capitalize text-xl font-semibold dark:text-neutral-50 text-neutral-600'>{m.nombre}</li>
                <li className='text-xl dark:text-neutral-50 text-neutral-600'>{m.rol}</li>
            </ul>
        </section>
    )
}
