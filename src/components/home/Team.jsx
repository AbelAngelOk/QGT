import './team.css';
import '../styles.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ammaturoImg from '../../assets/img/ammaturo_v2.png';
import alfasetti from '../../assets/img/alfasetti.png';
import miembros from './team.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const exampleImg03 = "https://arbusta.net/wp-content/uploads/2023/01/Paula-Cardenau-300x300.png";
const exampleImg04 = "https://arbusta.net/wp-content/uploads/2023/02/Beatriz-Ponce-de-Leon-300x300.png";
const exampleImg05 = "https://arbusta.net/wp-content/uploads/2023/02/Karen-Reales-300x300.png";

const images = [ammaturoImg, alfasetti, exampleImg03, exampleImg04, exampleImg05];

const tituloSeccionEquipos = "Equipo Electoral";

export function Team () {

    return (
        <section className="Team2">
            <div className='Team2--Title'>
                <h1> {tituloSeccionEquipos} </h1>
            </div>
            <ul className='Team2--Blocks'>       
                {member()}
            </ul>
        </section>       
    )
};

//Proposito: dado una imagen, un nombre y un rol completa el contenido del un contenedor de equipo.
function member () {
    return miembros.map((m, key) => {
        return(
            <li key={key} className='Team2--Block'>    
                <section className='Team2--Member'>
                    <div className='Team2--ImgContainer'>
                        <img src={images[m.id]} alt="imagen-miembro" />
                    </div>
                    <ul className='Team2--BlockTextAndLogo'>
                        <li className='Block--Text'>
                            <ul>
                                <li className='Team2--sub'>{m.nombre}</li>
                                <li className='Team2--description'>{m.rol}</li>
                            </ul>
                        </li>
                        <li className='Block--Logo oculto'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </li>
                    </ul>
                </section>
            </li>
        )
    })
};