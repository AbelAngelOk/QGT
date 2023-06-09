export const SquareText = ({ title, p1, p2 }) => {
  return (
    <div className='h-full flex items-center justify-center bg-[#636363] text-white'>
      <div className='w-2/3'>
        <h3 className='mb-3 text-2xl'>{title}</h3>
        <p className='mb-3 text-sm'>{p1}</p>
        <p className='text-sm'>{p2}</p>
      </div>
    </div>
  )
}

export const SquareLogo = ({ img, title }) => {
  return (
    <div className='h-full bg-black text-white flex items-center justify-center'>
      <div className='text-center'>
        <h3 className='text-5xl mb-14'>{img}</h3>
        <h3 className='text-2xl mt-14'>{title}</h3>
      </div>
    </div>
  )
}

export const SquareImg = ({ img }) => {
  return (
    <div className='h-full'>
      <img className='w-full h-full object-cover' src={import.meta.env.BASE_URL + img} alt='ciudad' />
    </div>
  )
}

export const SquarePhrase = ({ phrase }) => {
  return (
    <div className='h-full bg-[#48570b] text-white flex justify-center items-center'>
      <div className='text-center'>
        <h4 className='text-xl'>
          {phrase}
        </h4>
      </div>
    </div>
  )
}
