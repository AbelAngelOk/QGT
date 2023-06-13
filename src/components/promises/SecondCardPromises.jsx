import data from "./secondCardCompromisos.json";

const SecondCardPromises = () => {
  return (
    <div className='flex items-center justify-center h-[600px] w-[65%] mb-[15px] mx-auto'>
      <div className='flex items-center justify-around w-4/5'>
        <div className='w-3/5'>
          <h3 className='text-[2.2rem] mb-9 text-[#295eda]'> {data.title} </h3>
          <p className='text-justify leading-6 mb-[5px] font-normal text-[20px] text-[#41454b] dark:text-[#ffffff]'> {data.descriptionFirstP} </p>
          <p className='text-justify leading-6 mb-[5px] font-normal text-[20px] text-[#41454b] dark:text-[#ffffff]'> {data.descriptionSecondP} </p>
          <button className='bg-[#0033ad] hover:bg-[#113ea6] border-none rounded-xl h-11 w-36 text-[18px] text-white cursor-pointer mt-5 duration-300'> {data.button} </button>
        </div>
        <div className='flex flex-col justify-between items-center w-1/5 h-[327px]'>
          <div className='text-center text-[2.5rem] mt-2'>
            {data.img}
          </div>
          <div className='text-center'>
            <h4 className='text-[#727272] mb-4 font-light'> {data.resTitle} </h4>
            <p className='text-[1.3rem] font-normal text-[#41454b] dark:text-[#ffffff]'> {data.res} </p>
          </div>
          <div className='text-center'>
            <h4 className='text-[#727272] mb-4 font-light'>{data.secretaryTitle} </h4>
            <p className='text-[1.3rem] font-normal text-[#41454b] dark:text-[#ffffff]'> {data.secretary} </p>
          </div>
        </div>

            </div>
        </div>
    )
}

export default SecondCardPromises;