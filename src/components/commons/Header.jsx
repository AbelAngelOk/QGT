import "./header.css";
import { GestionPopUp } from "./gestionPopUp";
import { CompromisoPopUp } from "./compromisoPopUp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import data from "./header.json";

export function Header() {
    const [gestionPopUp, setGestionPopUp] = useState(false);
    const [compromisoPopUp, setCompromisoPopUp] = useState(false);

    const handleGestionPopUpMouseOver = () => {
        setGestionPopUp(true);
    };

    const handleGestionPopUpMouseLeave = () => {
        setGestionPopUp(false);
    };

    const handleCompromisoPopUpMouseOver = () => {
        setCompromisoPopUp(true);
    };
    
    const handleCompromisoPopUpMouseLeave = () => {
        setCompromisoPopUp(false);
    };

    
    const headerIcons = {
        "downArrow" : <FontAwesomeIcon icon={faChevronDown} />,
        "upArrow" : <FontAwesomeIcon icon={faChevronUp} />
    };

    return (
        <header>
            <div className="header__logo-container">
                <Link to="/#topComponent" className="logo__link">
                    <h1 className="logo__text"> { data.logoText } </h1>
                </Link>  
            </div>
            <nav className="header__nav-container">
                <ul className="header__nav-list">
                    <li  onMouseOver={handleGestionPopUpMouseOver} onMouseLeave={handleGestionPopUpMouseLeave}>
                        <p> { data.sectionText_1 } </p>
                        <div className="header__list-icon"> 
                            {gestionPopUp ? headerIcons.upArrow : headerIcons.downArrow} 
                        </div>
                        {gestionPopUp && <GestionPopUp />}
                    </li>
                    <li onMouseOver={handleCompromisoPopUpMouseOver} onMouseLeave={handleCompromisoPopUpMouseLeave}>
                        <Link to={"/Compromiso#banner"}>
                            { data.sectionText_2 }
                        </Link>
                        <div className="header__list-icon">
                            {compromisoPopUp ? headerIcons.upArrow : headerIcons.downArrow}
                        </div> 
                        {compromisoPopUp && <CompromisoPopUp />}
                    </li>
                    <li>
                        <Link to={"/Informes"}>
                            { data.sectionText_3 }
                        </Link>  
                    </li>
                </ul>
            </nav>
            <div className="header__menu"></div>
            
        </header>
    );
};
