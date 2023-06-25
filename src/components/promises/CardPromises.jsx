import p from './promisesCards.json';
import fcp from './FirstCardPromises';
import scp from './SecondCardPromises';


const CardPromises = () => {
    return RenderPromises
}

const RenderPromises = () => {
    return (
        p.map( e => { 
            if ( esIgualACero(e.idLogo) || esPar(e.idLogo) ) {
                return fcp(e)
            } else {
                return scp(e)
            }          
        })
    )
}

const esIgualACero = (e) => {
    let r = e = 0;
    return (r)
}

const esPar = (e) => {
    return ( ( e % 2 ) == 0 )
}

export default CardPromises;