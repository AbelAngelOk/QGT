import h from './HeroConst.json';

export function Hero() {
  return (
    <div className='w-full h-auto sm:h-[700px] flex flex-wrap'>
      <div className='py-[100px] w-full h-auto bg-[#f7f8f9] dark:bg-[#282c34] text-[#41454b] dark:text-[#ffffff] flex justify-center items-center flex-wrap'>
        <ul className='flex justify-center items-center flex-wrap w-4/5 gap-[30px]'>
          <li className='capitalize text-3xl  md:text-[4vw] lg:text-5xl  leading-[1.375] text-center font-semibold'> {h.title} </li>
          <li className='text-center font-semibold text-xl w-11/12 lg:w-3/5'> {h.description} </li>
          <li className='w-full h-auto flex justify-center flex-wrap'>
            <div className='w-1/2 h-auto flex items-center flex-nowrap justify-evenly gap-4'>
              <button className='text-inherit bg-[rgb(8,126,164)] hover:bg-[#282c34] dark:hover:bg-[#ffffff] hover:text-[#ffffff] dark:hover:text-[#282c34] rounded-[100px] py-3 px-5 font-semibold cursor-pointer text-sm sm:text-base sm:min-w-[145px] min-w-[100px] '> {h.buttonA} </button>
              <button className='text-inherit border-[#282c34] dark:border-[#ffffff] hover:bg-[#282c34] dark:hover:bg-[#ffffff] dark:hover:text-[#282c34] hover:text-[#ffffff] border-[1px] rounded-[100px] py-3 px-5 font-semibold cursor-pointer text-sm sm:text-base sm:min-w-[145px] min-w-[100px]'> {h.buttonB} </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
