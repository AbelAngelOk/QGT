import data from './mvvSuperior.json'

export const Superior = () => {
  return (
    <div className='lg:col-span-3 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-0 shadow-[0_8px_6px_-2px_black]'>
      <div className='text-center lg:h-3/5 w-10/12 lg:w-[48%]  flex items-center justify-center'>
        <h2 className='text-3xl lg:text-[1.3vw] p-0  text-white font-semibold'>{data.title}</h2>
      </div>
      <div className='w-8/12 lg:w-fit text-center border-b-2 lg:border-r-2 lg:border-b-0 lg:h-3/5' />
      <div className='p-3 lg:w-[48%] w-10/12'>
        <p className='lg:text-[1vw] mb-3 text-white'>{data.p1}</p>
        <p className='lg:text-[1vw] mt-3 text-white'>{data.p2}</p>
      </div>
    </div>
  )
}

export const Contenedor = ({ info }) => {
  return (
    <div className='row-span-1 lg:row-span-3'>
      <div style={{ backgroundImage: `url('${info.img}')` }} className='bg-cover bg-center absolute w-full lg:w-[33.33%] min-h-[650px] sm:min-h-[600px] lg:min-h-0 lg:h-[39vw] opacity-30' />
      <div className='h-full flex flex-col justify-center items-center lg:justify-normal lg:items-stretch font-bold w-4/5 lg:mt-10 mx-auto relative right-0  gap-16 lg:gap-10 py-3'>
        <h2 className='text-3xl lg:text-[1.5vw] text-white'>
          {info.title}
        </h2>
        <p className=' text-white font-semibold lg:text-[1vw] text-center lg:text-left'>
          {info.p1}
        </p>
        <p className='text-white font-semibold lg:text-[1vw] text-center lg:text-left'>
          {info.p2}
        </p>
      </div>
    </div>
  )
}
