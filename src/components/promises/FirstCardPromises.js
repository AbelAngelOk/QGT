import "./firstCardPromises.css";
import structureData from "./cardPromises.json"

const FirstCardPromises = (project, image) => {
    return(
        <div className="first-card__total-container">
            <div className="first-card__container">
                <div className="first-card__left-panel">
                    <div className="first-card__left-panel-logo">
                        { image }
                    </div>
                    <div className="first-card__left-panel-upper">
                        <h4> { structureData.txtResponsible } </h4>
                        <p> { project.responsible } </p>
                    </div>
                    <div className="first-card__left-panel-lower">
                        <h4> { structureData.txtResponsibleSecretariat } </h4>
                        <p> { project.responsibleSecretariat } </p>
                    </div>
                </div>
                <div className="first-card__right-panel">
                    <h3> { project.title } </h3>
                    <p> { project.description_p1 } </p>
                    <p> { project.description_p2 } </p>
                    <button> { structureData.button } </button>
                </div>
            </div>
        </div>
    )
}

export default FirstCardPromises;