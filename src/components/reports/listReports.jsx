import section from './contentsReportListSection.json'
import lsReports from './listReports.json'

const listReports = () => {

  const getListReports = () => {
    return (
      lsReports.map((report, key) => {
        return (
          <li key={key} id='listReports--row' className='p-1 w-full flex flex-wrap'>
            <ul id='listReports--row--inner' className='p-1 w-full flex flex-wrap rounded-lg items-center justify-evenly'>
              <li className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{report.año}</li>
              <li className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{report.periodo}</li>
              <li className='w-1/2 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{report.nombre}</li>
              <li className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'><a href={report.urlInforme}>descargar</a></li>
            </ul>
          </li>
        )
      }
      ))
  }

  return (
    <section id='listReports' className='w-full h-auto flex flex-wrap items-center justify-center py-5 bg-slate-200 dark:bg-slate-700 '>
      <ul id='listReports--table' className='w-11/12 flex flex-wrap rounded-lg shadow-lg bg-slate-300 dark:bg-slate-800 border'>
        <li id='listReports--titleCols' className='p-1 w-full flex flex-wrap'>
          <ul id='listReports--titleCols--inner'  className='p-1 w-full flex flex-wrap rounded-lg items-center justify-evenly'>
            <li id='fieldHead-col01' className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{section.titleColumn01}</li>
            <li id='fieldHead-col02' className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{section.titleColumn02}</li>
            <li id='fieldHead-col03' className='w-1/2 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{section.titleColumn03}</li>
            <li id='fieldHead-col04' className='w-1/12 flex flex-wrap text-cyan-950 dark:text-cyan-50'>{section.titleColumn04}</li>
          </ul>
        </li>
        {getListReports()}
      </ul>
    </section>
  )
}

export default listReports
