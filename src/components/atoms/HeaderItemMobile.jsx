import { Link } from 'react-router-dom'

export const HeaderItemMobile = ({ data, toggleMenu }) => {
  return (
    <div className='p-4'>
      <h3 className='mb-5 text-2xl w-fit'>
        <Link onClick={toggleMenu} to={data.dir}>
          {data.title}
        </Link>
      </h3>
      {data.list && (
        <>
          <ul className='ml-2 flex flex-col gap-1'>
            {data?.list.map((item, key) => (
              <li className='w-fit p-1 text-base' key={key}>
                <Link onClick={toggleMenu} to={item?.href}>{item.boxTitle}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
