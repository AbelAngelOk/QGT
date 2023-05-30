import "./headerPopUp.css";
import { Link } from "react-router-dom";
import dataBoxes from "./promisesPopUp.json";

export const CompromisoPopUp = () => {
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
            <Link key={key} className="popUp-link" to={box.href}>
                <li>
                    <h5 className="popUp-list__box-title"> {box.boxTitle} </h5>
                    <p className="popUp-list__box-text"> {box.boxText} </p>
                </li>
            </Link>
        )
    })
};