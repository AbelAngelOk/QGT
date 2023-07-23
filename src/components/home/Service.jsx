import { boxes } from './service-vars';
import cnst from './service-const.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Service () {
    return (
        <section id="service" className="w-full flex  flex-wrap justify-center items-center bg-palette-light-bg100 dark:bg-palette-light-txt700 h-[70vh]">
            <div id="service-titleContainer" className="w-full flex justify-center items-center">
                <h1 className="text-palette-light-txt800 dark:text-palette-light-bg100 text-6xl"> { cnst.title } </h1>
            </div>
            <div id="service-boxes" className="w-full h-[50vh] flex justify-evenly items-center">
                { boxMap() }
            </div>           
        </section>
    )
}

function boxMap () {
    return ( boxes.map( e => box(e) ) )
}

function box (e) {
    return (
        <div id={`service-box0${e.id}`} className='w-1/5 h-[50vh] flex flex-col justify-evenly items-center px-1 py-2'>
            <div id={`service-box0${e.id}-iconContainer`} className="w-1/2 h-2/6 flex items-center justify-center" >
                <FontAwesomeIcon id={`service-box0${e.id}-icon`} className="h-1/2 p-5 rounded-full bg-palette-light-bg400 dark:bg-palette-light-txt800" icon={e.icon} />
            </div>
            <b id={`service-box0${e.id}-textBold`} className='flex text-center justify-center items-center h-1/6 text-palette-light-txt800 dark:text-palette-light-bg100'>  { e.textBold } </b>
            <p id={`service-box0${e.id}-text`} className='flex text-center h-3/6 text-palette-light-txt800 dark:text-palette-light-bg100'>  { e.text } </p>
        </div>
    )
}