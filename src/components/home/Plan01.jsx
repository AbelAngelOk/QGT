import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export const Plan = ({ plan }) => {
  return (
    <section id={`plan01-plan0${plan.id}`} className='w-full sm:w-3/4 lg:w-1/3 xl:w-[30%] p-3 flex flex-col items-center gap-14 lg:gap-10 bg-white dark:bg-black border-t-8 border-t-violet-600 text-[#3b4148] dark:text-gray-200  shadow-xl'>
      <h3 id={`plan01-plan0${plan.id}-title`} className='w-full text-center text-5xl text-black dark:text-white'> {plan.title} </h3>
      {plan.logo
        ? <div>
          <FontAwesomeIcon className='text-violet-700 h-[62px]' icon={faReact} />
          </div>
        : <div className='w-fit items-center flex flex-wrap lg:flex-nowrap justify-center min-h-[62px] gap-1'>
          <h5 className='text-center text-6xl text-bold text-black dark:text-white'> {plan.price} </h5>
          <p className='w-4/12 text-center text-md h-fit self-end'> {plan.priceDetail} </p>
          </div>}

      <p className='w-full text-center text-xl min-h-[85px]'> {plan.detail} </p>
      <button className='w-4/5 h-12 rounded text-lg text-center bg-violet-600 text-white focus:bg-violet-700'> {plan.button} </button>
      <ul className='w-full ml-8 text-center flex flex-col gap-8'>
        {plan.items.map((itemContent, index) => {
          return (
            <li key={index} className='flex gap-3'>
              <FontAwesomeIcon className='text-xl self-center text-violet-600' icon={faCircleCheck} />
              <p className='text-lg sm:text-xl'> {itemContent} </p>
            </li>
          )
        })}
      </ul>
      <a href='' className='text-center text-xl text-violet-600 p-2 border-b-2 border-b-gray-200 dark:border-b-gray-800 mt-auto'> {plan.link} </a>
    </section>
  )
}
