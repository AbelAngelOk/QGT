export function Banner ({ json }) {
  return (
    <section className='flex flex-col justify-center  items-baseline py-0 px-[10%] w-full h-[55vh] bg-[#ffffff] dark:bg-[rgb(35,39,47)]'>
      <div className='w-fit h-auto'>
        <h1 className='font-semibold text-4xl md:text-5xl capitalize p-0 m-0 text-[#41454b] dark:text-[#ffffff]'>{json.title}</h1>
      </div>
      <div className='w-fit h-auto my-3'>
        <p className='text-xl text-[#41454b] dark:text-[#ffffff]'>{json.description}</p>
      </div>
    </section>
  )
};
