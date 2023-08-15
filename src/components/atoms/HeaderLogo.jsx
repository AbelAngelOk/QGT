import { Link } from 'react-router-dom'

export const HeaderLogo = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <Link to='/#topComponent' className='no-underline'>
        <h1 className='p-0 text-[#484c52] dark:text-[#ffffff]  cursor-pointer select-none mb-6 text-[2.5rem] relative top-3'> Quilmes </h1>
      </Link>
    </div>
  )
}
