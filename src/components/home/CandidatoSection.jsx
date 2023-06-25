import c from './candidatoData.json';

export const Candidato = () => {
    return (
        <section id="candidato" className='w-full flex justify-center py-20'>
            <div className="w-[90%] flex flex-wrap h-auto border">
                <div id="candidato-info" className="h-[70vh] w-2/3 bg-green-300 px-4 flex flex-row items-center">
                    <h1 id="candiato-title" className='w-full text-2xl font-bold uppercase px-4'> {c.title} </h1>
                    <RenderText />
                </div>
                <img id="candidato-img" src={c.imgUrl} className="h-[70vh] w-1/3"/>
            </div>
        </section>
    )
}

const RenderText = () => {
    return c.text.map( t => {
        return text(t)
    })
}

const text = (t) => {

    if ( t.type == "p" ) {
        return (
            <p id={ "parrafo0" + t.id } className='w-full px-4 py-2 text-base'> {t.content} </p>
        )
    }
    if ( t.type == "b" ) {
        return (
            <p id={ "parrafo0" +  t.id } className='w-full px-4 py-2 text-base font-semibold'> {t.content} </p>
        )
    }
} 
