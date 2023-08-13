import { CreateBoxes } from '../atoms/HeaderPopUpBoxes'

export const HeaderPopUp = ({ dataBoxes }) => {
  return (
    <div className='absolute flex justify-center items-end w-[800px] h-[410px] bg-[rgba(0,0,0,0)] translate-x-[-330px] top-[2rem] cursor-default'>
      <div className='font-sans box-border m-0 p-0 bg-[#f6f6f6] dark:bg-[#1f1f1f] w-[786px] py-[10px]  rounded-xl shadow-[2px_5px_12px_rgba(0,0,0,0.7)] font-medium cursor-pointer'>
        <ul className='flex text-white flex-wrap h-full list-none'>
          <CreateBoxes data={dataBoxes} />
        </ul>
      </div>
    </div>

  )
}
