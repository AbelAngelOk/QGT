import data from './contact01-const.json'
import { contact01vars } from './contact01-vars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Contact01 () {
    return (
        <section id="contact01" className="w-full h-screen py-5 flex flex-wrap p-2 bg-palette-light-bg200 dark:bg-palette-light-txt800">
            {/*
            <iframe id="contact01-map"className="w-[45%] h-5/6" src={data.UrlLocation} style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
            */}
            <div id='contact01-left' className='w-1/2 h-full p-10'>
                <div id="contact01-map" className='w-full h-full rounded-xl bg-palette-light-bg400 dark:bg-slate-900 border-4'>
                    <img src='../src/assets/img/map.png' className='w-full h-full rounded-lg border-4' />
                </div>
            </div>
            <div id="contact01-info" className="w-1/2 h-full p-10 justify-between items-center">
                <div id="contact01-up" className="w-full h-2/5 text-center">
                    <h1 id="contact01-up-title" className="text-2xl font-bold uppercase px-4 dark:text-palette-light-bg100 text-palette-light-txt800"> { data.TituloInfo } </h1>
                    <div id="contact01-br01" className='flex flex-col w-full py-4 gap-1'>
                        <div id="contact01-br01-a" className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1'></div>
                        <div id="contact01-br01-b" className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1'></div>
                    </div>
                    <ul id="contact01-up-info" className='h-3/5 flex flex-col justify-evenly pb-5'>
                        <li id="contact01-redes" className="w-full flex justify-evenly">
                            <ul id="contact01-redes-inner" className='w-2/3 flex justify-evenly'>
                                { renderIcons() }
                            </ul>
                        </li>
                        <li id="contact01-direccion" className="flex flex-row justify-center"> 
                            <p id="contact01-dir-key" className="w-auto px-4 py-1 text-base font-semibold dark:text-palette-light-bg100 text-palette-light-txt800"> { data.DireccionName } </p>
                            <p id="contact01-dir-value" className="w-auto px-4 py-1 text-base dark:text-palette-light-bg100 text-palette-light-txt800"> { data.DireccionValue } </p>
                        </li>
                        <li id="contact01-telefono" className="flex flex-row justify-center"> 
                            <p id="contact01-tel-key" className="w-auto px-4 py-1 text-base font-semibold dark:text-palette-light-bg100 text-palette-light-txt800"> { data.TelefonoName } </p>
                            <p id="contact01-tel-value" className="w-auto px-4 py-1 text-base dark:text-palette-light-bg100 text-palette-light-txt800"> { data.TelefonoValue } </p>                       
                         </li>
                    </ul>                
                </div>
                <div id="contact01-down" className="w-full h-3/5 text-center">
                    <form id="contact01-form" className="w-full h-full flex flex-wrap justify-evenly">
                        <div id='contact01-containerImputs' className='w-full flex-row flex flex-wrap justify-between'>
                            <div id='contact01-containerTitle02' className='w-full'>
                                <h1 id="contact01-down-title" className="text-2xl w-full font-bold uppercase px-4 dark:text-palette-light-bg100 text-palette-light-txt800 p-0 m-0 h-8"> { data.TituloForm } </h1>
                                <div id="contact01-br02" className='flex flex-col w-full h-auto py-4 gap-1'>
                                    <div id="contact01-br02-a" className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1'></div>
                                    <div id="contact01-br02-b" className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1'></div>
                                </div>
                            </div>
                            <input id="contact01-name" type="text" className="w-2/5 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-12 px-3 text-start" placeholder="nombre"></input>
                            <input id="contact01-email" type="email" className="w-2/5 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-12 px-3 text-start" placeholder="email"></input>
                            <textarea id="contact01-messaje" type="text" className="w-full border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-32 p-3 text-start resize-none	" placeholder="mensaje"></textarea >
                            <div className='w-full'>
                                <button id='contact01-sendButton' className='py-1 px-3 w-1/2 h-12 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm'> { data.BotonEnviar } </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

const renderIcons = () => {
    return contact01vars.map( e => icon(e) )
  }

  const icon = (e) => {
    return(
        <li id={`contact01-${e.name}-container`} className='flex w-auto h-auto'>
            <a id="contact01-facebook-link" href={e.link} className='flex w-auto h-auto' rel='noreferrer' target='_blank'>
            <FontAwesomeIcon id="contact01-facebook-icon" className='text-3xl md:text-4xl' icon={e.svg} />
            </a>
        </li>
    )
  }