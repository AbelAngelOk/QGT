import section from './table01-const.json'
import lsReports from './table01-vars.json'

export const table01 = () => {

  return (
    <section id='table01' className='w-full h-auto flex flex-wrap items-center justify-center py-5 dark:bg-palette-light-txt700 bg-palette-light-bg100'>
      <ul id='table01--table' className='w-11/12 flex flex-wrap rounded-lg shadow-lg bg-palette-light-bg300 dark:bg-palette-light-txt800'>
        <li id='table01--titleCols' className='p-1 w-full flex flex-wrap'>
          <ul id='table01--titleCols--inner'  className='p-1 w-full flex flex-wrap rounded-lg items-center justify-evenly'>
            <li id='table01-fieldHead-col01' className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{section.titleColumn01}</li>
            <li id='table01-fieldHead-col02' className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{section.titleColumn02}</li>
            <li id='table01-fieldHead-col03' className='w-1/2 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{section.titleColumn03}</li>
            <li id='table01-fieldHead-col04' className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{section.titleColumn04}</li>
          </ul>
        </li>
        { rowMap() }
      </ul>
    </section>
  )
}

const rowMap = () => {
  return (
    lsReports.map((report, key) => {
      return (
        <li key={key} id={'table01--row0' + key}  className='p-1 w-full flex flex-wrap'>
          <ul id={'table01--row0' + key + '--inner'} className='p-1 w-full flex flex-wrap rounded-lg items-center justify-evenly'>
            <li id={'table01-row0' + key + '-col01'} className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{report.año}</li>
            <li id={'table01-row0' + key + '-col02'} className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{report.periodo}</li>
            <li id={'table01-row0' + key + '-col03'} className='w-1/2 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'>{report.nombre}</li>
            <li id={'table01-row0' + key + '-col04'} className='w-1/12 flex flex-wrap dark:text-palette-light-bg100 :text-palette-light-txt800'><a href={report.urlInforme}>{section.downloadButton}</a></li>
          </ul>
        </li>
      )
    }
    ))
}