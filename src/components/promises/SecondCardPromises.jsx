import "./secondCardPromises.css";
import data from "./secondCardCompromisos.json";

const SecondCardPromises = () => {
    return(
        <div className="second-card__total-container">
            <div className="second-card__container">
                 <div className="second-card__left-panel">
                    <h3> { data.title } </h3>
                    <p> { data.descriptionFirstP } </p>
                    <p> { data.descriptionSecondP } </p>
                    <button> { data.button } </button>
                </div>
                <div className="second-card__right-panel">
                    <div className="second-card__right-panel-logo">
                         { data.img } 
                    </div>
                    <div className="second-card__right-panel-upper">
                        <h4> { data.resTitle } </h4>
                        <p> { data.res } </p>
                    </div>
                    <div className="second-card__right-panel-lower">
                        <h4>{ data.secretaryTitle } </h4>
                        <p> { data.secretary } </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SecondCardPromises;