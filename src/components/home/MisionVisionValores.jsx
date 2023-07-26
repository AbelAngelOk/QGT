import data from './misionvisionvalores.json'
import { Superior, Contenedor } from './mvvSuperior'

export const MisionVisionValores = () => {
  return (
    <section className='h-auto bg-[#282c34] grid grid-cols-1 lg:grid-cols-[repeat(3,_minmax(0,_33.33%))] sm:grid-rows-[repeat(4,_minmax(0,_600px))] grid-rows-[repeat(4,_minmax(0,_650px))] lg:grid-rows-[repeat(4,_minmax(0,_13vw))] my-8 lg:w-fit mx-auto'>
      <Superior />
      {data.map(info => {
        return (
          <Contenedor key={info.title} info={info} />
        )
      })}
    </section>
  )
}
