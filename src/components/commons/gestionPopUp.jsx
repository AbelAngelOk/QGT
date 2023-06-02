import dataBoxes from './gestionPopUp.json'

export const GestionPopUp = () => {
  return (
    <div className='font-sans box-border m-0 p-0 absolute bg-[#1f1f1f] translate-x-[-330px] top-[4.3rem] w-[786px] py-[10px]  rounded-xl shadow-[2px_5px_12px_rgba(0,0,0,0.7)] font-medium'>
      <ul className='flex text-white flex-wrap h-full list-none'>
        {createBoxes()}
      </ul>
    </div>
  )
}

const createBoxes = () => {
  return dataBoxes.map((box, key) => {
    return (
      <li className='w-[243px] h-[160px] m-2 bg-[#2f2f2f] hover:bg-[rgba(48,114,207,0.8)] rounded duration-500 cursor-pointer no-underline text-white' key={key}>
        <h5 className='text-base mt-4 ml-2 tracking-[1px]'> {box.boxTitle} </h5>
        <p className='mt-[5px] py-0 px-[5px]'> {box.boxText} </p>
      </li>
    )
  })
}
