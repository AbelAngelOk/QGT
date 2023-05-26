import  FirstCardPromises  from "../components/promises/FirstCardPromises";
import  SecondCardPromises  from "../components/promises/SecondCardPromises";
import CardPromises from "../components/promises/CardPromises";
import { Banner } from "../components/promises/Banner";

import "./promises.css";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Promises = () => {
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
                <CardPromises />
                {/*
                <div className="compromiso__first-card-container" id="finance">
                    <FirstCardPromises />
                </div>
                <div className="compromiso__second-card-container" id="identity" >
                    <SecondCardPromises />
                </div>   
                */}       
            </section>
        </div>
    );
};