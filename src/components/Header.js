import "./header.css";
import { GestionPopUp } from "./gestionPopUp";
import { CompromisoPopUp } from "./compromisoPopUp";
import { useState } from "react";


function Header() {
    const [gestionPopUp, setGestionPopUp] = useState(false);
    const [compromisoPopUp, setCompromisoPopUp] = useState(false);

    const handleGestionPopUp = () => {
        setGestionPopUp(!gestionPopUp);
        setCompromisoPopUp(compromisoPopUp && !compromisoPopUp);
    };

    const handleCompromisoPopUp = () => {
        setCompromisoPopUp(!compromisoPopUp);
        setGestionPopUp(gestionPopUp  && !gestionPopUp);
    };

    
    const headerIcons = {
        "downArrow" : <ion-icon name="chevron-down-outline"></ion-icon>,
        "upArrow" : <ion-icon name="chevron-up-outline"></ion-icon>,
        "menuBars" : <ion-icon name="reorder-four-outline"></ion-icon>
    }

    return (
        <header>

            <div className="header__logo-container">
                <p>
                   Quilmes
                </p>
            </div>
            <nav className="header__nav-container">
                <ul className="header__nav-list">
                    <li  onClick={handleGestionPopUp}>
                        <p>
                            GESTIÓN
                        </p>
                        <div className="header__list-icon">
                            {gestionPopUp ? headerIcons.upArrow : headerIcons.downArrow}
                        </div>
                            {gestionPopUp && <GestionPopUp/>}
                    </li>
                    <li onClick={handleCompromisoPopUp}>
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

export default Header;