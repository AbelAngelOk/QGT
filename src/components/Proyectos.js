import './proyectos.css';
import './styles.css';
import br from './assets/img/br.png';
import patrulla from './assets/img/Patrull.webp';

function Proyectos () {
    return (
        <section className='proyectos'>
            <ul className='proyectos--inner'>
                <li className='proyectos--title'>
                    <h1>Nuestras Propuestas</h1>
                </li>
                <li className='proyectos--description'>
                    <p>Nuestro compromiso es mejorar la calidad de vida de cada ciudadano de Quilmes. Nuestra misión consiste en impulsar los aspectos fundamentales, como la seguridad, la educación, el fomento de la industria y el enriquecimiento de Quilmes. Para lograrlo, hemos planificado múltiples proyectos que, individualmente, contribuyen significativamente a la calidad de vida y, en conjunto, se refuerzan mutuamente para mejorar todos los aspectos. </p>
                </li>
                <li className='proyectos--tab'>
                    <img src={br}/>
                </li>
                <li className='proyectos--containerBox'>
                    <ul className='proyectos--containerBox__ul'>
                        <li className='proyectos--box'>
                            <div className='proyectos--boxImg'><img src={patrulla}/></div>
                            <h4>Garantizar seguridad</h4>
                        </li>
                        <li className='proyectos--box'></li>
                        <li className='proyectos--box'></li>
                        <li className='proyectos--box'></li>
                        <li className='proyectos--box'></li>
                    </ul>
                </li>
                <li className='proyectos--detalle'>
                    <div className='proyectos--TablaDetalle'>

                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Proyectos;