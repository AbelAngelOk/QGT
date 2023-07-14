import data from './firstCardCompromisos.json'

export const FirstCardPromises = () => {
  return (
    <div className='flex items-center justify-items-start lg:justify-center bg-[#f7f8f9] dark:bg-[rgb(55,65,81)] min-h-[600px] h-auto xl:min-w-[950px] w-[95%] lg:w-[65%] mb-[15px] mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-around gap-10 w-full'>
        <div className='flex flex-col flex-wrap items-start justify-between lg:items-center gap-12  lg:gap-15 w-full px-4 lg:px-0'>
          <div className='text-center text-[2.5rem] mt-2'>
            {data.img}
          </div>
          <div className='lg:text-center'>
            <h4 className='text-[#727272] mb-2 font-normal'> {data.resTitle} </h4>
            <p className='text-[1.3rem] font-normal text-[#41454b] dark:text-[#ffffff]'> {data.res} </p>
          </div>
          <div className='lg:text-center'>
            <h4 className='text-[#727272] mb-2 font-light'> {data.secretaryTitle} </h4>
            <p className='text-[1.3rem] font-normal text-[#41454b] dark:text-[#ffffff]'> {data.secretary} </p>
          </div>
        </div>
        <div className='px-4 lg:py-12 lg:px-20 w-full'>
          <h3 className='text-3xl md:text-4xl mb-9 text-[#295eda] min-w-[215px]'> {data.title} </h3>
          <div className='lg:w-[30vw]'>
            <p className='text-justify leading-6 mb-[5px] font-normal text-base md:text-xl  text-[#41454b] dark:text-[#ffffff]'> {data.descriptionFirstP} </p>
            <p className='text-justify leading-6 mb-[5px] font-normal text-base md:text-xl text-[#41454b] dark:text-[#ffffff]'> {data.descriptionSecondP} </p>
          </div>
          <button className='bg-[#0033ad] hover:bg-[#113ea6] border-none rounded-xl h-11 w-36 text-[18px] text-white cursor-pointer my-6 lg:mb-0 lg:mt-5 duration-300'> {data.button} </button>
        </div>
      </div>
    </div>
  )
}

export default FirstCardPromises
