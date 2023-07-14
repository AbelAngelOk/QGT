import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import footerData from './footerData.json'

const icons = [{ svg: faFacebook, url: 'facebook' }, { svg: faInstagram, url: 'instagram' }, { svg: faLinkedin, url: 'linkedin' }, { svg: faTwitter, url: 'twitter' }, { svg: faYoutube, url: 'youtube' }]

export const Footer = () => {
  const renderIcons = () => {
    return icons.map((icon, key) => (
      <a key={key} rel='noreferrer' target='_blank' href={`https://www.${icon.url}.com/`}>
        <FontAwesomeIcon className='text-3xl md:text-4xl' icon={icon.svg} />
      </a>
    ))
  }

  return (
    <footer className='flex flex-col lg:h-[280px] p-6 bg-[#2e3f51]'>
      <div className='flex justify-around mt-3'>
        <div className='hidden md:block border-b  border-[#cdd9e8] w-[35%]' />
        <div className='flex justify-around w-[26%] text-[#cdd9e8] min-w-[300px] md:min-w-[420px] '>{renderIcons()}</div>
        <div className='hidden md:block border-b  border-[#cdd9e8] w-[35%]' />
      </div>
      <div className='self-center mt-5 text-center'>
        <h3 className='tracking-[3px] text-[1.8rem] text-[#cdd9e8]'>{footerData.title}</h3>
        <p className='text-[0.9rem] text-[#cdd9e8] mt-[15px]'>{footerData.copyright}</p>
        <div className='flex'>
          <a className='py-0 px-10 text-[#cdd9e8] text-[0.9rem] mt-[15px] border-r-[1px] border-r-[#cdd9e8] underline font-bold' href='/'>{footerData.legal}</a>
          <a className='py-0 px-10 text-[#cdd9e8] text-[0.9rem] mt-[15px] underline font-bold' href='/'>{footerData.priv}</a>
        </div>
      </div>
    </footer>
  )
}
