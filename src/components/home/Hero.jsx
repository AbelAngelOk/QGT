import h from './hero-const.json';
import Typewriter from 'typewriter-effect';

export function Hero() {
  return (
    <div id="hero01" className='w-full h-auto sm:h-[700px] flex flex-wrap bg-palette-light-bg100 text-palette-light-txt800 dark:text-palette-light-bg100 dark:bg-palette-light-txt700'>
      <div id="hero01-inner" className='py-[100px] w-full h-auto flex justify-center items-center flex-wrap'>
        <ul id="hero01-inner" className='flex justify-center items-center flex-wrap w-4/5 gap-[30px]'>
          <li id="hero01-title" className='capitalize text-3xl  md:text-[4vw] lg:text-5xl  leading-[1.375] text-center font-semibold'> { animation() } </li>
          <li id="hero01-description" className='text-center font-semibold text-xl w-11/12 lg:w-3/5'> {h.description} </li>
          <li id="hero01-buttons" className='w-full h-auto flex justify-center flex-wrap'>
            <div id="hero01-buttonsInner" className='w-1/2 h-auto flex items-center flex-nowrap justify-evenly gap-4'>
              <button id="hero01-buttonA" className='text-inherit bg-palette-color hover:bg-palette-light-txt700 dark:hover:bg-palette-light-bg100 dark:hover:text-palette-light-txt800 rounded-[100px] py-3 px-5 font-semibold cursor-pointer text-sm sm:text-base sm:min-w-[145px] min-w-[100px] '> {h.buttonA} </button>
              <button id="hero01-buttonB" className='text-inherit border-[#282c34] hover:bg-palette-light-txt700 dark:hover:bg-palette-light-bg100 dark:hover:text-palette-light-txt800 border-[1px] rounded-[100px] py-3 px-5 font-semibold cursor-pointer text-sm sm:text-base sm:min-w-[145px] min-w-[100px]'> {h.buttonB} </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

const animation = () => {
  return (
  <Typewriter 
      onInit={ 
        (typewriter) => {
          typewriter
            .pauseFor(100)
            .typeString( h.title )
            .pauseFor(100)
            .deleteAll()
            .start()
        }
      } 
      options={{
        autoStart: true,
        loop: true,
      }}
  />
  )
  
}