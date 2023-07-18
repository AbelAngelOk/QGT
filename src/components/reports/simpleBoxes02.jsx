import boxes from './simpleBoxes02-vars.json'

export const simpleBoxes02 = () => {
  return (
    <section id='simpleBoxes02' className='w-full h-96 flex justify-around items-center flex-wrap bg-palette-light-bg300 dark:bg-palette-light-txt700'>
      { boxMap() }
    </section>
  )
}

function boxMap () {
  return boxes.map ( (b, key) => Box(b,key) )
}

function Box (data, id) {
  return (
    <ul id={'simpleBoxes02-box0' + id} className='w-80 h-52 flex flex-wrap py-1 px-3 shadow-lg rounded-lg border bg-palette-light-bg400 dark:bg-palette-light-txt800'>
      <li id={'simpleBoxes02-box0' + id + '-horizontalUp'} className='w-full h-1/3 justify-evenly items-center flex flex-wrap'>
        <p id={'simpleBoxes02-box0' + id + '-horizontalUp-text'} className='text-palette-light-txt800 dark:text-palette-light-bg100'>{ data.title } </p>
        <div id={'simpleBoxes02-box0' + id + '-imgContainer'} className=''>
          <img id={'simpleBoxes02-box0' + id + '-img'} alt='' />
          </div>
      </li>
      <li id={'simpleBoxes02-box0' + id + '-horizontalDown'} className='w-full h-2/3 flex flex-wrap items-center justify-evenly'>
        <div id={'simpleBoxes02-box0' + id + '-horizontalDown-left'} className='w-1/2 h-full flex flex-wrap flex-col'>
          <p id={'simpleBoxes02-box0' + id + '-horizontalDown-left-txt01'} className='text-palette-light-txt800 dark:text-palette-light-bg100'> { data.data01 } </p>
          <p id={'simpleBoxes02-box0' + id + '-horizontalDown-left-txt02'} className='text-palette-light-txt800 dark:text-palette-light-bg100'> { data.data02 } </p>
        </div>
        <div id={'simpleBoxes02-box0' + id + '-horizontalDown-right-imgContainer'} className='w-1/2 h-full flex flex-wrap flex-row'>
          <img id={'simpleBoxes02-box0' + id + '-horizontalDown-right-img'} alt={ data.img } />
        </div>
      </li>
    </ul>
  )
}
