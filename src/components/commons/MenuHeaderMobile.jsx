import { Link } from 'react-router-dom'

export function MenuHeaderMobile (props) {
  const toggleMenu = () => {
    props.setMenuMobile(!props.menuMobile)
  }

  return (
    <div className={`flex flex-col lg:hidden fixed h-screen w-screen left-0 top-0 m-0 p-0 bg-black/60 backdrop-blur z-50 text-white overflow-hidden ${props.menuMobile ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
      <div className='ml-full mr-0 w-auto'>
        <span onClick={toggleMenu} className='absolute right-3 top-2'>X</span>
      </div>
      <div className='p-6'>
        <h3 onClick={toggleMenu} className='mb-5 text-3xl inline-block'>Gestion</h3>
        <ul className='ml-2 flex flex-col gap-3 text-xl '>
          {props.gestionData.map((data, key) => (
            <li className='w-fit p-1' onClick={toggleMenu} key={key}>{data.boxTitle}</li>
          ))}
        </ul>
      </div>
      <div className='p-4'>
        <h3 className='mb-5 text-3xl w-fit'>
          <Link onClick={toggleMenu} to='/Compromiso#banner'>
            Compromisos
          </Link>
        </h3>
        <ul className='ml-2 flex flex-col gap-3 text-xl '>
          {props.promisesData.map((data, key) => (
            <li className='w-fit p-1' key={key}>
              <Link onClick={toggleMenu} to={data.href}>{data.boxTitle}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-6'>
        <h3 className='text-3xl'>
          <Link onClick={toggleMenu} to='/Informes'>
            Informes
          </Link>
        </h3>
      </div>
    </div>
  )
}
