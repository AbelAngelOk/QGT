// import  CardsPromises  from "../components/promises/CardsPromises";
// import { Banner } from "../promises/Banner";
// import { Footer } from "../commons/Footer";

// import "./promises.css";

// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// export const Promises = () => {
//     const location = useLocation();

//     useEffect(() => {
//         const { hash } = location;
//         if (hash) {
//             const element = document.querySelector(hash);
//             if (element) {
//                 element.scrollIntoView({ behavior: "smooth" });
//             }
//         }
//     }, [location]);

//     return(
//         <div>
//             <div className="compromiso__total-container">
//                 <div id="banner">
//                     <Banner />
//                 </div>
//                 <section className="compromiso__cards-container">
//                     <div className="compromiso__first-card-container" id="finance">
//                         <CardsPromises />
//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </div>
//     );
// };
