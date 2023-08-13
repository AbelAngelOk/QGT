import { HeaderItemMobile } from '../atoms/HeaderItemMobile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import data from './menuHeader.json'

export function MenuHeaderMobile (props) {
  const toggleMenu = () => {
    props.setMenuMobile(!props.menuMobile)
  }

  return (
    <div className={`flex flex-col lg:hidden fixed h-screen w-screen left-0 top-0 m-0 p-0 bg-black/60 backdrop-blur z-50 text-white overflow-hidden ${props.menuMobile ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
      <div className='ml-full mr-0 w-auto'>
        <span onClick={toggleMenu} className='absolute right-3 top-2 text-xl'><FontAwesomeIcon icon={faX} /></span>
      </div>
      {data.map(item => (
        <HeaderItemMobile key={item.title} data={item} toggleMenu={toggleMenu} />
      ))}
    </div>
  )
}
