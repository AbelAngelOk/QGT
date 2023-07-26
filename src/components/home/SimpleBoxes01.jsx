import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import vrs from './simpleBoxes01-vars.json'
import cns from './simpleBoxes01-const.json'

export function SimpleBoxes01 () {
  return (
    <section id='simpleBoxes01' className='w-full h-auto flex flex-wrap justify-center pb-[5%] bg-palette-light-bg300 dark:bg-palette-light-txt800 min-h-[600px]'>
      <div id='simpleBoxes01-titleContainer' className='w-full h-auto flex justify-center my-8 mx-0'>
        <h2 id='simpleBoxes01-title' className='py-5 text-3xl md:text-5xl text-palette-light-txt800 dark:text-palette-light-bg100'> {cns.title} </h2>
      </div>
      <ul id='simpleBoxes01-boxesContainer' className='w-full h-auto flex justify-evenly flex-wrap gap-6'>
        <BoxMap />
      </ul>
    </section>
  )
}

const BoxMap = () => {
  return vrs.map(d => {
    return (
      <Box key={d.id} data={d} />
    )
  })
}

const Box = ({ data }) => {
  return (
    <li id={'simpleBoxes01-Box' + data.id} className='flex h-auto md:w-1/6 min-w-[180px] flex-col rounded-xl pt-0 px-3 pb-3 bg-palette-light-bg200  dark:bg-palette-light-txt700'>
      <section id={'simpleBoxes01-Box' + data.id + '-inner'} className='w-full h-full flex flex-col items-center justify-initial'>
        <div id={'simpleBoxes01-Box' + data.id + '-imageContainer'} className='w-full h-auto min-h-[195px]'>
          <img id={'simpleBoxes01-Box' + data.id + '-image'} src={data.img} className='object-contain min-h-[195px]' alt='imagen-miembro' />
        </div>
        <ul id={'simpleBoxes01-Box' + data.id + '-textContainer'} className='w-4/5 h-auto list-none flex flex-row gap-[1vh]'>
          <li id={'simpleBoxes01-Box' + data.id + '-text'} className='w-full'>
            <ul id={'simpleBoxes01-Box' + data.id + '-textInner'} className='flex flex-col gap-[1vh] mt-2'>
              <li id={'simpleBoxes01-Box' + data.id + '-textName'} className='capitalize text-xl font-semibold text-palette-light-txt800 dark:text-palette-light-bg100'>{data.nombre}</li>
              <li id={'simpleBoxes01-Box' + data.id + '-textRol'} className='text-lg font-normal text-palette-light-txt800 dark:text-palette-light-bg100'>{data.rol}</li>
            </ul>
          </li>
          <li id={'simpleBoxes01-Box' + data.id + '-icon'} className='w-full hidden'>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </ul>
      </section>
    </li>
  )
}
