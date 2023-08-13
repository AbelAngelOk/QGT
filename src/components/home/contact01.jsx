import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import data from './contact01-const.json'
import contact01vars from './contact01-vars.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube)

export function Contact01 () {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = form.current

    if (fields.clientName.value.length >= 3 && fields.clientEmail.value.length >= 7 && fields.message.value.length >= 12) {
      emailjs.sendForm('service_fqd9zyk', 'template_c87jhw6', form.current, 'Cr_hQD4l2qlowwA2t')
        .then((result) => {
          fields.reset()
          console.log(result.text)
          // eslint-disable-next-line no-undef
          alert('Formulario enviado exitosamente')
        }, (error) => {
          console.log(error.text)
          // eslint-disable-next-line no-undef
          alert('Error al enviar el formulario')
        })
    } else {
      // eslint-disable-next-line no-undef
      alert('Completa el formulario correctamente')
    }
  }

  return (
    <section id='contact01' className='w-full h-auto py-5 flex flex-wrap justify-center items-center p-2 bg-palette-light-bg200 dark:bg-palette-light-txt800'>
      <iframe id='contact01-map' className='w-full sm:w-11/12 lg:w-[45%] lg:min-w-[495px] h-[450px] sm:h-[600px] xl:h-[700px] p-4 sm:p-6 lg:p-10' src={data.UrlLocation} allowFullScreen='' style={{ border: '0px' }} loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
      <div id='contact01-info' className='lg:w-5/12 lg:min-w-[495px] p-10 flex flex-col gap-16 items-center'>
        <div id='contact01-up' className='w-full h-2/5 text-center'>
          <h4 id='contact01-up-title' className='text-2xl font-bold uppercase px-4 dark:text-palette-light-bg100 text-palette-light-txt800'> {data.TituloInfo} </h4>
          <div id='contact01-br01' className='flex flex-col w-full py-4 gap-1'>
            <div id='contact01-br01-a' className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1' />
            <div id='contact01-br01-b' className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1' />
          </div>
          <ul id='contact01-up-info' className='h-3/5 flex flex-col justify-evenly pb-5 gap-5'>
            <li id='contact01-redes' className='w-full flex justify-evenly'>
              <ul id='contact01-redes-inner' className='w-full sm:w-2/3 flex justify-evenly'>
                {contact01vars.map(e => (
                  <Icon key={e.name} e={e} />
                ))}
              </ul>
            </li>
            <li id='contact01-direccion' className='flex flex-row justify-center'>
              <p id='contact01-dir-key' className='w-auto px-4 py-1 text-base font-semibold dark:text-palette-light-bg100 text-palette-light-txt800'> {data.DireccionName} </p>
              <p id='contact01-dir-value' className='w-auto px-4 py-1 text-base dark:text-palette-light-bg100 text-palette-light-txt800'> {data.DireccionValue} </p>
            </li>
            <li id='contact01-telefono' className='flex flex-row justify-center'>
              <p id='contact01-tel-key' className='w-auto px-4 py-1 text-base font-semibold dark:text-palette-light-bg100 text-palette-light-txt800'> {data.TelefonoName} </p>
              <p id='contact01-tel-value' className='w-auto px-4 py-1 text-base dark:text-palette-light-bg100 text-palette-light-txt800'> {data.TelefonoValue} </p>
            </li>
          </ul>
        </div>
        <div id='contact01-down' className='w-full h-3/5 text-center'>
          <form id='contact01-form' className='w-full h-full flex flex-wrap justify-evenly' ref={form} onSubmit={handleSubmit}>
            <div id='contact01-containerImputs' className='w-full flex-row flex flex-wrap justify-between'>
              <div id='contact01-containerTitle02' className='w-full'>
                <h4 id='contact01-down-title' className='text-2xl w-full font-bold uppercase px-4 dark:text-palette-light-bg100 text-palette-light-txt800 p-0 mb-5 h-8'> {data.TituloForm} </h4>
                <div id='contact01-br02' className='flex flex-col w-full h-auto py-4 gap-1'>
                  <div id='contact01-br02-a' className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1' />
                  <div id='contact01-br02-b' className='dark:border-palette-light-bg200 border-palette-light-txt800 rounded-sm border-b-2 w-full h-1' />
                </div>
              </div>
              <div id='contact01-inputs-container' className='flex flex-wrap justify-around gap-4 w-full'>
                <input id='contact01-name' name='clientName' type='text' className='w-2/5 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-12 px-3 text-start focus:outline-none' placeholder='nombre' required />
                <input id='contact01-email' name='clientEmail' type='email' className='w-2/5 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-12 px-3 text-start focus:outline-none' placeholder='email' required />
                <textarea id='contact01-messaje' name='message' type='text' className='w-4/5 lg:w-full border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm h-32 p-3 text-start resize-none mt-5 focus:outline-none' placeholder='mensaje' required />
              </div>
              <div className='w-full'>
                <input type='submit' value={data.BotonEnviar} id='contact01-sendButton' className='py-1 px-3 w-1/2 h-12 border-2 border-palette-light-txt800 dark:border-palette-light-bg200 rounded-sm mt-5 text-white cursor-pointer' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const Icon = ({ e }) => {
  return (
    <li id={`contact01-${e.name}-container`} className='flex w-auto h-auto'>
      <a id='contact01-facebook-link' href={e.link} className='flex w-auto h-auto' rel='noreferrer' target='_blank'>
        <FontAwesomeIcon id='contact01-facebook-icon' className='text-3xl md:text-4xl' icon={['fab', e.svg]} />
      </a>
    </li>
  )
}
