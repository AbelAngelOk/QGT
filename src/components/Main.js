import { Hero } from "./Hero.js";
import { Team } from "./Team2.js";
import { Proyectos } from "./Proyectos.js";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Main = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return(
        <div>
            <Hero />
            <Team />
            <Proyectos />
        </div>
    )
};

