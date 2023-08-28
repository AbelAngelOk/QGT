// import LsCompromisos from './promisesCards.json';
// import './firstCardPromises.css';
// //import './secondCardPromises.css';

// /* Guarda una lista de secciones de tipo a y b de compromisos de forma intercalada */
// let LsPromisesInt = [];

// /* recorre promisesCards.json para construir la lista de secciones */
// const CardsPromises = () => {
//     LsCompromisos.map( (comp) => { IntercalarCardsPromises(comp) } );
//     return LsPromisesInt;
// }

// /* agrega en LsPromisesInt las secciones a  y b de compromisos */
// const IntercalarCardsPromises = (compromiso = LsCompromisos[1]) => {

//     console.log(compromiso)
//     return ( firstCardPromises(compromiso) )

//     /*
//     let DebeCrearseLaPrimerCard = true;

//     if ( DebeCrearseLaPrimerCard ) {
//         LsPromisesInt.concat(firstCardPromises(compromiso)) ;
//         DebeCrearseLaPrimerCard = false;
//     } else {
//         LsPromisesInt.concat(secondCardPromises(compromiso)) ;
//         DebeCrearseLaPrimerCard = true;
//     }
//     */
// }

// /* retorna un nuevo compromiso a */
// const firstCardPromises = (data) => {
//     return(
//         <div className="first-card__total-container">
//             <div className="first-card__container">
//                 <div className="first-card__left-panel">
//                     <div className="first-card__left-panel-logo">
//                         { data.img }
//                     </div>
//                     <div className="first-card__left-panel-upper">
//                         <h4> { data.resTitle } </h4>
//                         <p> { data.res } </p>
//                     </div>
//                     <div className="first-card__left-panel-lower">
//                         <h4> { data.secretaryTitle } </h4>
//                         <p> { data.secretary } </p>
//                     </div>
//                 </div>
//                 <div className="first-card__right-panel">
//                     <h3> { data.title } </h3>
//                     <p> { data.descriptionFirstP } </p>
//                     <p> { data.descriptionSecondP } </p>
//                     <button> { data.button } </button>
//                 </div>
//             </div>
//         </div>
//     )
// };

// /* retorna un nuevo compromiso b */
// function secondCardPromises(data) {
//     return(
//         <div className="second-card__total-container">
//             <div className="second-card__container">
//                  <div className="second-card__left-panel">
//                     <h3> { data.title } </h3>
//                     <p> { data.descriptionFirstP } </p>
//                     <p> { data.descriptionSecondP } </p>
//                     <button> { data.button } </button>
//                 </div>
//                 <div className="second-card__right-panel">
//                     <div className="second-card__right-panel-logo">
//                          { data.img }
//                     </div>
//                     <div className="second-card__right-panel-upper">
//                         <h4> { data.resTitle } </h4>
//                         <p> { data.res } </p>
//                     </div>
//                     <div className="second-card__right-panel-lower">
//                         <h4>{ data.secretaryTitle } </h4>
//                         <p> { data.secretary } </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default IntercalarCardsPromises;
