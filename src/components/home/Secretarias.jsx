import data from './secretarias.json'
import { SquareImg, SquareLogo, SquarePhrase, SquareText } from './SecretariaSquares'

export const Secretarias = () => {
  return (
    <section className='grid grid-cols-[repeat(2,_minmax(0,_250px))] md:grid-cols-[repeat(2,_minmax(0,_350px))] lg:grid-cols-[repeat(4,_minmax(0,_20vw))] grid-rows-[repeat(8,_minmax(0,_250px))] md:grid-rows-[repeat(8,_minmax(0,_350px))] lg:grid-rows-[repeat(4,_minmax(0,_20vw))] mx-auto my-8 w-fit'>
      {data.map(content => {
        return (
          <div key={content.id}>
            {content.type === 'text' && <SquareText title={content.title} p1={content.p1} p2={content.p2} />}
            {content.type === 'phrase' && <SquarePhrase phrase={content.phrase} />}
            {content.type === 'logo' && <SquareLogo img={content.img} title={content.title} />}
            {content.type === 'img' && <SquareImg img={content.img} />}
          </div>
        )
      })}
    </section>
  )
}
