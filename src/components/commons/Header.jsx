import { DarkMode } from '../context/DarkMode'
import { HeaderItem } from '../atoms/HeaderItem.jsx'
import { HeaderMobile } from '../atoms/HeaderMobile'
import { HeaderLogo } from '../atoms/HeaderLogo'

import data from './menuHeader.json'

export function Header () {
  return (
    <header className='flex gap-5 lg:gap-0 lg:justify-around items-center bg-[#ffffff] dark:bg-[#282c34] shadow-md fixed w-screen z-50 font-sans box-border'>
      <HeaderMobile />
      <HeaderLogo />
      <nav className='hidden h-full lg:block'>
        <ul className='h-full flex list-none justify-around items-center mr-32 gap-12 relative bottom-3'>
          {data.map(item => (
            <HeaderItem key={item.title} data={item} />
          ))}
        </ul>
      </nav>
      <DarkMode />
    </header>
  )
}
