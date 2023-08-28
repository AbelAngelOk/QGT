export const SquareText = ({ title, p1, p2 }) => {
  return (
    <div className='h-full flex items-center justify-center bg-[#636363] text-white'>
      <div className='w-full md:w-2/3 text-center flex flex-col gap-1'>
        <h3 className='text-xl md:text-2xl lg:text-[1.4vw]'>{title}</h3>
        <p className='text-sm md:text-base lg:text-[1.2vw] xl:text-[1.1vw] px-1 lg:leading-[2vw] xl:leading-[1.8vw]'>{p1}</p>
        <p className='text-sm md:text-base lg:text-[1.2vw] xl:text-[1.1vw] px-1 lg:leading-[2vw] xl:leading-[1.8vw]'>{p2}</p>
      </div>
    </div>
  )
}

export const SquareLogo = ({ img, title }) => {
  return (
    <div className='h-full bg-black text-white flex items-center justify-center'>
      <div className='text-center'>
        <h3 className='text-3xl md:text-5xl lg:text-[2vw] mb-14'>{img}</h3>
        <h3 className='text-xl md:text-2xl lg:text-[1.4vw] mt-14'>{title}</h3>
      </div>
    </div>
  )
}

export const SquareImg = ({ img }) => {
  return (
    <div className='h-full'>
      <img className='w-full h-full object-cover' src={img} alt='ciudad' />
    </div>
  )
}

export const SquarePhrase = ({ phrase }) => {
  return (
    <div className='h-full bg-[#48570b] text-white flex justify-center items-center'>
      <div className='text-center px-1'>
        <h4 className='text-lg md:text-xl lg:text-[1.5vw] xl:text-[1.3vw]'>
          {phrase}
        </h4>
      </div>
    </div>
  )
}
