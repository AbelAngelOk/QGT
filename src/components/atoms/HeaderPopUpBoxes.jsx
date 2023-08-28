import { Link } from 'react-router-dom'

export const CreateBoxes = ({ data }) => {
  return data.map((box, key) => {
    return (
      <li className='w-[243px] h-[160px] m-2 bg-[#e0e0e0] text-[#2f2f2f] dark:bg-[#2f2f2f] hover:bg-[rgba(71,129,210,0.8)] dark:hover:bg-[rgba(71,129,210,0.8)] rounded duration-500 cursor-pointer no-underline dark:text-white' key={key}>
        <Link to={box?.href}>
          <h5 className='text-base mt-4 ml-2 tracking-[1px] text-inherit dark:text-inherit'> {box.boxTitle} </h5>
          <p className='mt-[5px] py-0 px-[5px] text-inherit dark:text-inherit'> {box.boxText} </p>
        </Link>
      </li>
    )
  })
}
