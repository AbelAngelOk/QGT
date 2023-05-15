import { FirstCardCompromisos } from "./FirstCardCompromisos";
import { SecondCardCompromisos } from "./SecondCardCompromisos";
import "./compromiso.css";
import { Banner } from "./Banner";

export const Compromiso = () => {
    return(
        <div className="compromiso__total-container">
            <Banner />
            <section className="compromiso__cards-container">
                <div className="compromiso__first-card-container">
                    <FirstCardCompromisos id="finance"/>
                </div>
                <div className="compromiso__second-card-container">
                    <SecondCardCompromisos id="identity"/>
                </div>          
            </section>
        </div>
    );
};