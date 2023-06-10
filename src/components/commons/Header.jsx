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
            <header className="flex justify-between items-center h-[90px] bg-[#282c34] shadow-md fixed  w-full z-50 font-sans box-border">
            <div className="h-full w-[36%] flex items-center justify-center">
                <Link to="/#topComponent" className="no-underline">
                    <h1 className="p-0 text-[#f3f3f3] cursor-pointer select-none mb-4 mr-[90px] text-[2.5rem]"> { data.logoText } </h1>
                </Link>  
            </div>
            <nav className="w-[28%] h-full">
                <ul className="h-full flex list-none justify-around items-center">
                    <li className="flex h-1/2 cursor-pointer" onMouseOver={handleGestionPopUpMouseOver} onMouseLeave={handleGestionPopUpMouseLeave}>
                        <p className="border-none text-[#f3f3f3] text-xl tracking-[2px] font-bold relative cursor-pointer select-none h-6 top-[10px]"> { data.sectionText_1 } </p>
                        <div className="relative text-xl cursor-pointer top-3 text-[#f3f3f3] left-1"> 
                            {gestionPopUp ? headerIcons.upArrow : headerIcons.downArrow} 
                        </div>
                        {gestionPopUp && <GestionPopUp />}
                    </li>
                    <li className="flex h-1/2 cursor-pointer" onMouseOver={handleCompromisoPopUpMouseOver} onMouseLeave={handleCompromisoPopUpMouseLeave}>
                        <Link className="border-none text-[#f3f3f3] text-xl tracking-[2px] font-bold relative cursor-pointer select-none h-6 top-[10px] no-underline " to={"/Compromiso#banner"}>
                            { data.sectionText_2 }
                        </Link>
                        <div className="relative text-xl cursor-pointer top-3 text-[#f3f3f3] left-1">
                            {compromisoPopUp ? headerIcons.upArrow : headerIcons.downArrow}
                        </div> 
                        {compromisoPopUp && <CompromisoPopUp />}
                    </li>
                    <li className="flex h-1/2 cursor-pointer">
                        <Link className="border-none text-[#f3f3f3] text-xl tracking-[2px] font-bold relative cursor-pointer select-none h-6 top-[10px] no-underline " to={"/Informes"}>
                            { data.sectionText_3 }
                        </Link>  
                    </li>
                </ul>
            </nav>
            <div className="w-[36%]"></div>
            
        </header>
    );
};
