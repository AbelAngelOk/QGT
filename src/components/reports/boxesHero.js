import './boxes.css'
import './threeBoxesSection.css'

const boxesHero = () => {
    return (
        <section className='reports--threeBoxesSection'>
            <Box/>
            <Box/>
            <Box/>
        </section>
    );
} 

export default boxesHero;

function Box () {
    return (
            <ul className="reports--box">
                <li className="reports--box--horizontalUp">
                    <p> Solicitudes de licencias </p>
                    <div className="reports--box--eyeLogoContainer"><img></img></div>
                </li>
                <li className="reports--box--horizontalDown">
                    <div className="reports--box--Down--left">
                        <p>16</p>
                        <p>pendientes</p>
                    </div>
                    <div className="reports--box--Down--right">
                        <img></img>
                    </div>
                </li>
            </ul>
    )
}