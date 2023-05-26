import FirstCardPromises from "./FirstCardPromises"
import SecondCardPromises from "./SecondCardPromises";
import cardPromises from "./promises.json";

import logo1 from "../../assets/img/educacion.svg";
import logo2 from "../../assets/img/impositivo.svg";

const CardPromises = () => {

    return (
        <CreatePromises />
    )
}

const CreatePromises = () => {

    let logos = [logo1, logo2];
    let cardPromiseFirstType = true;

    return cardPromises.map( (promise) => {
        if ( cardPromiseFirstType ) {
            <FirstCardPromises project={promise} image={ logos[promise.idLogo] } />
            cardPromiseFirstType = false;
        } 
        else {
            <SecondCardPromises project={promise} image={ logos[promise.idLogo] }/>
            cardPromiseFirstType = true;
        }
    })
}

export default CardPromises;