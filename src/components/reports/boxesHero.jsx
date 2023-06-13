import './box.css'

const boxesHero = () => {
  return (
    <section className='reports--threeBoxesSection'>
      <Box />
      <Box />
      <Box />
    </section>
  )
}

export default boxesHero

function Box () {
  return (
    <ul className='reports--box'>
      <li className='reports--box--horizontalUp'>
        <p> Solicitudes de licencias </p>
        <div className='reports--box--eyeLogoContainer'><img alt='' /></div>
      </li>
      <li className='reports--box--horizontalDown'>
        <div className='reports--box--Down--left'>
          <p>16</p>
          <p>Pendientes</p>
        </div>
        <div className='reports--box--Down--right'>
          <img alt='' />
        </div>
      </li>
    </ul>
  )
}
