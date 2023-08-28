import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import footerData from './footer-const.json'
import vrs from './footer-vars.json'

const icons = [
  {
    svg: faFacebook,
    url: 'facebook'
  },
  {
    svg: faInstagram,
    url: 'instagram'
  },
  {
    svg: faLinkedin,
    url: 'linkedin'
  },
  {
    svg: faTwitter,
    url: 'twitter'
  },
  {
    svg: faYoutube,
    url: 'youtube'
  }
]

export const Footer = () => {
  return (
    <footer id='footer01' className='flex flex-col justify-center lg:h-[300px] p-6 bg-palette-color'>
      <div id='footer01-head' className='flex justify-around mt-3'>
        <div id='footer01-rightLine' className='hidden md:block border-b w-[35%] border-palette-light-bg100' />
        <div id='footer01-icons' className='flex justify-around w-[26%] text-palette-light-bg100 min-w-[300px] md:min-w-[420px] '>
          {renderIcons()}
        </div>
        <div id='footer01-leftLine' className='hidden md:block border-b  border-palette-light-bg100 w-[35%]' />
      </div>
      <div id='footer01-body' className='self-center mt-5 text-center'>
        <h3 id='footer01-title' className='tracking-[3px] text-[1.8rem] text-palette-light-bg100'>{footerData.title}</h3>
        <p id='footer01-copyrightText' className='text-[0.9rem] text-palette-light-bg100 mt-[15px]'>{footerData.copyright}</p>
        <div id='footer01-links' className='flex'>
          <a id='footer01-legal' className='py-0 px-10 text-palette-light-bg100 text-[0.9rem] mt-[15px] border-r-[1px] border-r-palette-light-bg100 underline font-bold' href={`https://www.${vrs.linkPrivace}.com/`}>{footerData.legal}</a>
          <a id='footer01-privace' className='py-0 px-10 text-palette-light-bg100 text-[0.9rem] mt-[15px] underline font-bold' href={`https://www.${vrs.linkLegal}.com/`}> {footerData.priv} </a>
        </div>
      </div>
    </footer>
  )
}

const renderIcons = () => {
  return icons.map((icon, key) => (
    <a id={`footer01-${icon.url}`} key={key} rel='noreferrer' target='_blank' href={`https://www.${icon.url}.com/`}>
      <FontAwesomeIcon className='text-3xl md:text-4xl' icon={icon.svg} />
    </a>
  ))
}
