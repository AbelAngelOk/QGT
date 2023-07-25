import data from './mvvSuperior.json'

export const Superior = () => {
  return (
    <div className='col-span-3 bg-[#474747] flex items-center justify-between shadow-[0_8px_6px_-2px_black]'>
      <div className='flex items-center justify-center w-[45%] border-r-2 h-3/5'>
        <h2 className='text-[2.5vw] p-0'>{data.title}</h2>
      </div>
      <div className='w-1/2 p-3'>
        <p className='text-[1vw] mb-3'>{data.p1}</p>
        <p className='text-[1vw] mt-3'>{data.p2}</p>
      </div>
    </div>
  )
}

export const Contenedor = ({ info }) => {
  return (
    <div className='row-span-3'>
      <div style={{ backgroundImage: `url('${info.img}')` }} className='bg-cover bg-center absolute w-[33.33%] h-[39vw] opacity-30' />
      <div className='h-full flex flex-col font-bold w-4/5 mt-10 mx-auto relative right-0  gap-7 lg:gap-10'>
        <h2 className='text-[1.7vw] lg:text-[1.5vw] text-white'>
          {info.title}
        </h2>
        <p className=' text-white font-semibold text-[1.1vw] lg:text-[1vw]'>
          {info.p1}
        </p>
        <p className='text-white font-semibold text-[1.1vw] lg:text-[1vw]'>
          {info.p2}
        </p>
      </div>
    </div>
  )
}
