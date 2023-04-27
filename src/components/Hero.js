import './hero.css';

function Hero() {
  return (
    <div className="Hero">
      <div className="Box-hero">
        <ul className="Box-hero-elements">
          <li className='hero-title'>Fomentar la honestidad Gubernamental. Ofrecer una gestion transparente a todos los ciudadanos.</li>
          <li className='hero-description'>Desde el proyecto de Quilmes Transparente creemos en las cuentas claras, el trabajo chequeable y los resultados cuantificables para que, a traves del poder de la informacion, el ciudadano tenga mas recursos para formar opiniones criticas sobre la gestion municipal de turno. </li>
          <li className='hero-buttons'> 
            <ul className='hero-buttons-box'>
              <li className='hero-button1'>Leer mas</li>
              <li className='hero-button2'>Contacto</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
