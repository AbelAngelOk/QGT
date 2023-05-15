import "./headerPopUp.css";
import { Link } from "react-router-dom";

export const CompromisoPopUp = () => {
    return(
        <div className="popUp-container">
            <ul className="popUp-list">
                <Link to="/Compromiso#finance" className="popUp-link">
                    <li>
                        <h5 className="popUp-list__box-title">Finance</h5>
                        <p className="popUp-list__box-text">Identity verifcation is key step before accepting new clients...</p>
                    </li>
                </Link>
                <Link to="/Compromiso#identity" className="popUp-link">
                    <li>
                        <h5 className="popUp-list__box-title">Identity</h5>
                        <p className="popUp-list__box-text">Simply opening a new bank account in certain countries...</p>
                    </li>
                </Link>
                <li>
                    <h5 className="popUp-list__box-title">LOREM</h5>
                    <p className="popUp-list__box-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                </li>
                <li>
                    <h5 className="popUp-list__box-title">LOREM</h5>  
                    <p className="popUp-list__box-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                </li>
                <li>
                    <h5 className="popUp-list__box-title">LOREM</h5>
                    <p className="popUp-list__box-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                </li>
                <li>
                   <h5 className="popUp-list__box-title">LOREM</h5>
                    <p className="popUp-list__box-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                </li>
            </ul>
        </div>
    );
};
