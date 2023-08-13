import { useState, useEffect } from 'react'

import { MenuHeaderMobile } from '../commons/MenuHeaderMobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export const HeaderMobile = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  const handleMenuMobile = () => {
    setMenuMobile(prevState => !prevState)
  }

  useEffect(() => {
    if (menuMobile) {
      document.querySelector('#root').classList.add('overflow-hidden')
      document.documentElement.classList.add('overflow-hidden')
    } else {
      document.querySelector('#root').classList.remove('overflow-hidden')
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [menuMobile])

  return (
    <div className='lg:hidden ml-5 text-3xl mr-7'>
      <button className='text-[#484c52] dark:text-[#ffffff]'>
        <FontAwesomeIcon onClick={handleMenuMobile} icon={faEllipsisVertical} />
      </button>
      {menuMobile && <MenuHeaderMobile setMenuMobile={setMenuMobile} menuMobile={menuMobile} />}
    </div>

  )
}
