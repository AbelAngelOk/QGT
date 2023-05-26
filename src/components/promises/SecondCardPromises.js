import "./secondCardPromises.css"
import structureData from "./cardPromises.json"

const SecondCardPromises = (project, image) => {
    return(
        <div className="second-card__total-container">
            <div className="second-card__container">
                 <div className="second-card__left-panel">
                    <h3> { project.title } </h3>
                    <p> { project.description_p1 } </p>
                    <p> { project.description_p1 } </p>
                    <button> { structureData.button } </button>
                </div>
                <div className="second-card__right-panel">
                    <div className="second-card__right-panel-logo">
                         { image } 
                    </div>
                    <div className="second-card__right-panel-upper">
                        <h4> { structureData.txtResponsible } </h4>
                        <p> { project.responsible } </p>
                    </div>
                    <div className="second-card__right-panel-lower">
                        <h4>{ structureData.txtResponsibleSecretariat } </h4>
                        <p> { project.responsibleSecretariat } </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SecondCardPromises;