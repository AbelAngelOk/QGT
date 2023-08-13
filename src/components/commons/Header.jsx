import { DarkMode } from '../context/DarkMode'
import { HeaderItem } from '../atoms/HeaderItem.jsx'
import { HeaderMobile } from '../atoms/HeaderMobile'

import { Link } from 'react-router-dom'

import data from './menuHeader.json'

export function Header () {
  return (
    <header className='flex gap-5 lg:gap-0 lg:justify-around items-center   bg-[#ffffff] dark:bg-[#282c34] shadow-md fixed w-screen z-50 font-sans box-border'>
      <HeaderMobile />
      <div className='h-full flex items-center justify-center'>
        <Link to='/#topComponent' className='no-underline'>
          <h1 className='p-0 text-[#484c52] dark:text-[#ffffff]  cursor-pointer select-none mb-6 text-[2.5rem] relative top-3'> Quilmes </h1>
        </Link>
      </div>
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
