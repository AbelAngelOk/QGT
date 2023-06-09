import b from './banner.json'

export function Banner () {
  return (
    <section className='flex flex-col justify-center  items-baseline py-0 px-[10%] w-full h-[55vh] bg-[#ffffff] dark:bg-[rgb(35,39,47)]'>
      <div className='w-3/5 h-auto'>
        <h1 className='font-semibold capitalize p-0 m-0 text-[#41454b] dark:text-[#ffffff]'>{b.title}</h1>
      </div>
      <div className='w-3/5 h-auto'>
        <p className='text-[20px] text-[#41454b] dark:text-[#ffffff]'>{b.description}</p>
      </div>
    </section>
  )
};
