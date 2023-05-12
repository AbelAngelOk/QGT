import "./header.css";
import { GestionPopUp } from "./gestionPopUp";
import { CompromisoPopUp } from "./compromisoPopUp";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        "downArrow" : <ion-icon name="chevron-down-outline"></ion-icon>,
        "upArrow" : <ion-icon name="chevron-up-outline"></ion-icon>,
        "menuBars" : <ion-icon name="reorder-four-outline"></ion-icon>
    };

    return (
        <header>
            <div className="header__logo-container">
                <Link to="/" className="logo__link">
                    <h1 className="logo__text">
                    Quilmes
                    </h1>
                </Link>  
            </div>
            <nav className="header__nav-container">
                <ul className="header__nav-list">
                    <li  onMouseOver={handleGestionPopUpMouseOver} onMouseLeave={handleGestionPopUpMouseLeave}>
                        <p>
                            GESTIÓN
                        </p>
                        <div className="header__list-icon">
                            {gestionPopUp ? headerIcons.upArrow : headerIcons.downArrow}
                        </div>
                            {gestionPopUp && <GestionPopUp />}
                    </li>
                    <li onMouseOver={handleCompromisoPopUpMouseOver} onMouseLeave={handleCompromisoPopUpMouseLeave}>
                        <p  >
                            COMPROMISO
                        </p>
                        <div className="header__list-icon">
                            {compromisoPopUp ? headerIcons.upArrow : headerIcons.downArrow}
                        </div> 
                        {compromisoPopUp && <CompromisoPopUp />}
                    </li>
                    <li>
                        <p>
                            INFORMES
                        </p>  
                    </li>
                </ul>
            </nav>
            <div className="header__menu">
                <div>
                    {headerIcons.menuBars}
                </div>
            </div>
            
        </header>
    );
};
