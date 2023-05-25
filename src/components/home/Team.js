import './team.css';
import '../styles.css';
import linkedin from '../../assets/img/linkedin.svg';
import ammaturoImg from '../../assets/img/ammaturo_v2.png';
import alfasetti from '../../assets/img/alfasetti.png';

//const exampleImg01 = "https://arbusta.net/wp-content/uploads/2023/01/Emiliano-Fazio-300x300.png"
//const exampleImg02 = "https://arbusta.net/wp-content/uploads/2023/01/Emiliano-Fazio-300x300.png";
const exampleImg03 = "https://arbusta.net/wp-content/uploads/2023/01/Paula-Cardenau-300x300.png";
const exampleImg04 = "https://arbusta.net/wp-content/uploads/2023/02/Beatriz-Ponce-de-Leon-300x300.png";
const exampleImg05 = "https://arbusta.net/wp-content/uploads/2023/02/Karen-Reales-300x300.png";

const titulo_seccion_equipo = "Equipo Electoral";

export function Team () {

    return (
        <section className="Team2">
            <div className='Team2--Title'>
                <h1> {titulo_seccion_equipo} </h1>
            </div>
            <ul className='Team2--Blocks'>         
                <li className='Team2--Block'> { Member(ammaturoImg, "Jose Luis Amaturo","Intendente" ) } </li>
                <li className='Team2--Block'> { Member(alfasetti, "Estefania Alfasetti","1er Consejal" ) } </li>                
                <li className='Team2--Block'> { Member(exampleImg03, "Alan Benitez","2er Consejal" ) } </li>                
                <li className='Team2--Block'> { Member(exampleImg04, "Alan Cejas","3ro Consejal" ) } </li>                
                <li className='Team2--Block'> { Member(exampleImg05, "Mateo Cao","4to Consejal" ) } </li>            
            </ul>
        </section>       
    )
}

//Proposito: dado una imagen, un nombre y un rol completa el contenido del un contenedor de equipo.
function Member (img, name, rol) {
    return (
        <section className='Team2--Member'>
            <div className='Team2--ImgContainer'>
                <img src={img} alt="imagen-miembro" />
            </div>
            <ul className='Team2--BlockTextAndLogo'>
                <li className='Block--Text'>
                    <ul>
                        <li className='Team2--sub'>{name}</li>
                        <li className='Team2--description'>{rol}</li>
                    </ul>
                </li>
                <li className='Block--Logo oculto'>
                    <img src={linkedin} alt="linkedin"/>
                </li>
            </ul>
        </section>
    )
}