import "./headerPopUp.css";
import { Link } from "react-router-dom";
import dataBoxes from "./promisesPopUp.json";

export const CompromisoPopUp = () => {
    return(
        <div className="popUp-container">
            <ul className="popUp-list">
                {
                    () => { return ( 
                        dataBoxes.map( (box) => {
                            <Link to={box} className="popUp-link">
                            <li>
                                <h5 className="popUp-list__box-title"> { box.boxTitle } </h5>
                                <p className="popUp-list__box-text"> { box.boxText } </p>
                            </li>
                        </Link>
                     })
                    )}
                }
            </ul>
        </div>
    );
};
