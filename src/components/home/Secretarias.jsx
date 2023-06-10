import data from './secretarias.json'
import { SquareImg, SquareLogo, SquarePhrase, SquareText } from './Squares'

export const Secretarias = () => {
  return (
    <section className='grid 2xl:grid-cols-[repeat(4,_280px)] grid-cols-[repeat(4,_250px)] 2xl:grid-rows-[repeat(4,_280px)] grid-rows-[repeat(4,_250px)] mx-auto my-8 w-fit'>
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
