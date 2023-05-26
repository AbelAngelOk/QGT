import './hero.css';
import h from './hero.json';
export function Hero() {
  return (
    <div className="Hero">
      <div className="Box-hero">
        <ul className="Box-hero-elements">
          <li className='hero-title'> { h.title } </li>
          <li className='hero-description'> { h.description } </li>
          <li className='hero-buttons'> 
            <ul className='hero-buttons-box'>
              <li className='hero-button1'> { h.buttonA } </li>
              <li className='hero-button2'> { h.buttonB } </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
