const boxesHero = () => {
  return (
    <section id='reports--threeBoxesSection' className='w-full min-h-[420px]  flex flex-row gap-5 justify-around items-center flex-wrap bg-slate-200 dark:bg-slate-700 pt-5'>
      <Box />
      <Box />
      <Box />
    </section>
  )
}

export default boxesHero

function Box () {
  return (
    <ul id='reports--box' className='w-80 h-52 flex flex-wrap py-1 px-3 shadow-lg rounded-lg border bg-slate-300 dark:bg-slate-800'>
      <li id='reports--box--horizontalUp' className='w-full h-1/3 justify-evenly items-center flex flex-wrap'>
        <p className='text-cyan-950 dark:text-cyan-50'> Solicitudes de licencias </p>
        <div id='reports--box--eyeLogoContainer' className=''><img alt='' /></div>
      </li>
      <li id='reports--box--horizontalDown' className='w-full h-2/3 flex flex-wrap items-center justify-evenly'>
        <div id='reports--box--Down--left' className='w-1/2 h-full flex flex-wrap flex-row'>
          <p className='text-cyan-950 dark:text-cyan-50'>16</p>
          <p className='text-cyan-950 dark:text-cyan-50'>Pendientes</p>
        </div>
        <div id='reports--box--Down--right' className='w-1/2 h-full flex flex-wrap flex-row'>
          <img alt='' />
        </div>
      </li>
    </ul>
  )
}
