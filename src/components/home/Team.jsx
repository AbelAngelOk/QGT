import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ammaturoImg from '../../assets/img/ammaturo_v2.png'
import alfasetti from '../../assets/img/alfasetti.png'
import miembros from './team.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const exampleImg03 = 'https://arbusta.net/wp-content/uploads/2023/01/Paula-Cardenau-300x300.png'
const exampleImg04 = 'https://arbusta.net/wp-content/uploads/2023/02/Beatriz-Ponce-de-Leon-300x300.png'
const exampleImg05 = 'https://arbusta.net/wp-content/uploads/2023/02/Karen-Reales-300x300.png'

const images = [ammaturoImg, alfasetti, exampleImg03, exampleImg04, exampleImg05]

const tituloSeccionEquipos = 'Equipo Electoral'

export function Team () {
  return (
    <section className='w-full lg:min-h-[800px] h-auto flex flex-wrap justify-center pb-[5%] dark:bg-[rgb(25,27,33)] bg-[#ffffff] border-y-[#e5e7ea26]'>
      <div className='w-full h-fit flex justify-center my-8 mx-0 '>
        <h2 className='py-5 text-4xl md:text-5xl dark:text-[#ffffff]'> {tituloSeccionEquipos} </h2>
      </div>
      <ul className='w-full h-auto flex justify-evenly flex-wrap gap-6'>
        {member()}
      </ul>
    </section>
  )
}

// Proposito: dado una imagen, un nombre y un rol completa el contenido del un contenedor de equipo.
function member () {
  return miembros.map((m, key) => {
    return (
      <li key={key} className='flex h-[25vw] md:w-1/6 flex-col rounded-xl bg-[rgb(35,39,47)] pt-0 px-3 pb-3 justify-center'>
        <section className='w-full h-4/5 flex flex-col items-center justify-between'>
          <div className='w-full h-auto'>
            <img src={images[m.id]} className='object-cover max-h-[293px] m-0' alt='imagen-miembro' />
          </div>
          <ul className='w-4/5 h-auto list-none flex flex-row gap-[1vh]'>
            <li className='w-full'>
              <ul className='flex flex-col gap-[1vh] mt-2'>
                <li className='capitalize text-xl font-semibold text-[rgb(246,247,249)]'>{m.nombre}</li>
                <li className='text-lg font-normal text-[rgb(246,247,249)]'>{m.rol}</li>
              </ul>
            </li>
            <li className='w-full hidden'>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </section>
      </li>
    )
  })
}
