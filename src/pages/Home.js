import { Hero } from "../components/home/Hero.js";
import { Team } from "../components/home/Team.js";
import { Projects } from "../components/home/Projects.js";
import { Footer } from "../components/commons/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return(
        <div>
            <Hero />
            <Team />
            <Projects />
            <Footer />
        </div>
    )
};

