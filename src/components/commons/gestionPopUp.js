import "./headerPopUp.css";
import dataBoxes from "./gestionPopUp.json";

export const GestionPopUp = () => {
    return(
        <div className="popUp-container">
            <ul className="popUp-list">
                {createBoxes()}
            </ul>
        </div>
    );
};

const createBoxes = () => {
    return dataBoxes.map((box, key) => {
        return(
            <li key={key} >
                <h5 className="popUp-list__box-title"> {box.boxTitle} </h5>
                <p className="popUp-list__box-text"> {box.boxText} </p>
            </li>
        )
    })
};