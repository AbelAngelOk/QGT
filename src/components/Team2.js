import './team2.css';
import './styles.css';
import linkedin from './assets/img/linkedin.svg';

export function Team2 () {
    return (
        <section className="Team2">
            <script src="https://kit.fontawesome.com/811ec135b9.js" crossOrigin="anonymous"></script>

            <div className='Team2--Title'>
                <h1>Equipo Electoral</h1>
            </div>

            <div className='Team2--Blocks'>
                
                <ul className='Team2--Block'>
                   <img src='https://arbusta.net/wp-content/uploads/2023/01/Emiliano-Fazio-300x300.png' alt='Emiliano Fazio'/>
                   <ul>
                        <li className='Block--Text'>
                            <ul >
                                <li className='Team2--sub'>Abel Angel Cejas</li>
                                <li className='Team2--description'>Full-Stack Developement</li>
                            </ul>
                        </li>
                        <li className='Block--Logo'>
                            <img src={linkedin} alt='linkedin-logo'/>
                        </li>
                    </ul>
                </ul>
                <div className='Team2--Block'>
                   <img src='https://arbusta.net/wp-content/uploads/2023/01/Paula-Cardenau-300x300.png' alt='Emiliano Fazio'/>
                    <ul>
                        <li className='Block--Text'>
                            <ul >
                                <li> <h6>Emiliano Fazio</h6> </li>
                                <li> <p>Cofundador & Chief</p> </li>
                                <li> <p>Executive Officer / CEO</p></li>
                            </ul>
                        </li>
                        <li className='Block--Logo'>
                            <img src={linkedin} alt='linkedin-logo'/>
                        </li>
                    </ul>
                </div>                
                <ul className='Team2--Block'>
                   <img src='https://arbusta.net/wp-content/uploads/2023/02/Juan-Umaran-300x300.png' alt='Emiliano Fazio'/>
                   <ul>
                        <li className='Block--Text'>
                            <ul >
                                <li> <h6>Emiliano Fazio</h6> </li>
                                <li> <p>Cofundador & Chief</p> </li>
                                <li> <p>Executive Officer / CEO</p></li>
                            </ul>
                        </li>
                        <li className='Block--Logo'>
                            <img src={linkedin} alt='linkedin-logo'/>
                        </li>
                    </ul>
                </ul>                
                <ul className='Team2--Block'>
                   <img src='https://arbusta.net/wp-content/uploads/2023/02/Beatriz-Ponce-de-Leon-300x300.png' alt='Emiliano Fazio'/>
                   <ul>
                        <li className='Block--Text'>
                            <ul >
                                <li> <h6>Emiliano Fazio</h6> </li>
                                <li> <p>Cofundador & Chief</p> </li>
                                <li> <p>Executive Officer / CEO</p></li>
                            </ul>
                        </li>
                        <li className='Block--Logo'>
                            <img src={linkedin} alt='linkedin-logo'/>
                        </li>
                    </ul>
                </ul>                
                <ul className='Team2--Block'>
                   <img src='https://arbusta.net/wp-content/uploads/2023/02/Karen-Reales-300x300.png' alt='Emiliano Fazio'/>
                   <ul>
                        <li className='Block--Text'>
                            <ul >
                                <li> <h6>Emiliano Fazio</h6> </li>
                                <li> <p>Cofundador & Chief</p> </li>
                                <li> <p>Executive Officer / CEO</p></li>
                            </ul>
                        </li>
                        <li className='Block--Logo'>
                            <img src={linkedin} alt='linkedin-logo'/>
                        </li>
                    </ul>
                </ul>            
            </div>
        </section>

        
    );
}