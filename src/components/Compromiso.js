import  FirstCardCompromisos  from "./FirstCardCompromisos";
import  SecondCardCompromisos  from "./SecondCardCompromisos";
import "./compromiso.css";
import { Banner } from "./Banner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Compromiso = () => {
    const location = useLocation();

    useEffect(() => {   
        const { hash } = location;   
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return(
        <div className="compromiso__total-container">
            <Banner />
            <section className="compromiso__cards-container">
                <div className="compromiso__first-card-container" id="finance">
                    <FirstCardCompromisos />
                </div>
                <div className="compromiso__second-card-container" id="identity" >
                    <SecondCardCompromisos />
                </div>          
            </section>
        </div>
    );
};