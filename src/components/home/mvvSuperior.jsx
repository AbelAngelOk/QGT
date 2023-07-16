import data from './mvvSuperior.json'

export const Superior = () => {
  return (
    <div className='col-span-3 flex items-center justify-between shadow-[0_8px_6px_-2px_black]' >
      <div className='text-center w-[45%] border-r-2 h-3/5'>
        <h2 className='text-[1.2vw] p-0 mt-11'>{data.title}</h2>
      </div>
      <div className='w-1/2 p-3'>
        <p className='text-[0.9vw] mb-3'>{data.p1}</p>
        <p className='text-[0.9vw] mt-3'>{data.p2}</p>
      </div>
    </div>
  )
}


export const Contenedor = ({ info }) => {
  return (
    <div className='row-span-3'>
      <div style={{ backgroundImage: `url('${info.img}')` }} className='bg-cover bg-center absolute w-[23vw] h-[39vw] opacity-30 ' />
      <div className='h-full flex flex-col font-bold w-4/5 mt-10 mx-auto relative right-0'>
        <h2 className='text-[1.2vw] text-white'>
          {info.title}
        </h2>
        <p className='mb-5 text-white font-semibold text-[0.9vw] '>
          {info.p1}
        </p>
        <p className='mt-5 text-white font-semibold text-[0.9vw]'>
          {info.p2}
        </p>
      </div>
    </div>
  )
}
