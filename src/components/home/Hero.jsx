import './hero.css'
import h from './hero.json'
export function Hero () {
  return (
    <div className='w-full h-[700px] flex flex-wrap'>
      <div className='py-[100px] w-full h-auto bg-[#f7f8f9] dark:bg-[#282c34] text-[#41454b] dark:text-[#ffffff] flex justify-center items-center flex-wrap'>
        <ul className='flex justify-center items-center flex-wrap w-4/5 gap-[30px]'>
          <li className='capitalize text-[50px] leading-[1.375] text-center font-semibold'> {h.title} </li>
          <li className='text-center font-semibold text-xl w-4/5'> {h.description} </li>
          <li className='w-full h-auto flex justify-center flex-wrap'>
            <ul className='w-1/2 h-auto flex items-center flex-nowrap justify-evenly'>
              <li className='text-inherit bg-[rgb(8,126,164)] hover:bg-[#282c34] dark:hover:bg-[#ffffff] hover:text-[#ffffff] dark:hover:text-[#282c34] rounded-[100px] py-3 px-10 font-semibold cursor-pointer'> {h.buttonA} </li>
              <li className='text-inherit border-[#282c34] dark:border-[#ffffff] hover:bg-[#282c34] dark:hover:bg-[#ffffff] dark:hover:text-[#282c34] hover:text-[#ffffff] border-[1px] rounded-[100px] py-3 px-10 font-semibold cursor-pointer'> {h.buttonB} </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
