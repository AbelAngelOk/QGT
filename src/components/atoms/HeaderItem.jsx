import { Link } from 'react-router-dom'
import { useState } from 'react'

import { HeaderPopUp } from '../commons/headerPopUp.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const HeaderItem = ({ data }) => {
  const [popUp, setPopUp] = useState(false)

  const handlePopUp = () => {
    setPopUp(!popUp)
  }

  const headerIcons = {
    downArrow: <FontAwesomeIcon icon={faChevronDown} />,
    upArrow: <FontAwesomeIcon icon={faChevronUp} />
  }

  return (
    <li className='flex h-1/2 cursor-pointer' onMouseEnter={handlePopUp} onMouseLeave={handlePopUp}>
      <Link className='border-none text-[#484c52] dark:text-[#ffffff] text-xl tracking-[2px] font-bold relative cursor-pointer select-none h-6 top-[10px] no-underline ' to={data.dir}>
        {data.title}
      </Link>
      {data.list && (
        <>
          <div className='relative text-xl cursor-pointer top-3 text-[#484c52] dark:text-[#f3f3f3] left-1'>
            {popUp ? headerIcons.upArrow : headerIcons.downArrow}
          </div>
          {popUp && <HeaderPopUp dataBoxes={data.list} />}
        </>
      )}

    </li>
  )
}
