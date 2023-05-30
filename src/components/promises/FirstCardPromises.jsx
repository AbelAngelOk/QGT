import "./firstCardPromises.css";
import data from "./firstCardCompromisos.json";

const FirstCardPromises = () => {
    return(
        <div className="first-card__total-container">
            <div className="first-card__container">
                <div className="first-card__left-panel">
                    <div className="first-card__left-panel-logo">
                        { data.img }
                    </div>
                    <div className="first-card__left-panel-upper">
                        <h4> { data.resTitle } </h4>
                        <p> { data.res } </p>
                    </div>
                    <div className="first-card__left-panel-lower">
                        <h4> { data.secretaryTitle } </h4>
                        <p> { data.secretary } </p>
                    </div>
                </div>
                <div className="first-card__right-panel">
                    <h3> { data.title } </h3>
                    <p> { data.descriptionFirstP } </p>
                    <p> { data.descriptionSecondP } </p>
                    <button> { data.button } </button>
                </div>
            </div>
        </div>
    )
};

export default FirstCardPromises;