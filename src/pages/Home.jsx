import { Hero } from '../components/home/Hero.jsx'
import { Team } from '../components/home/Team.jsx'
import { Projects } from '../components/home/Projects.jsx'
import { Footer } from '../components/commons/Footer'
import { Secretarias } from '../components/home/Secretarias.jsx'
// import { Candidato } from '../components/home/CandidatoSection.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { MisionVisionValores } from '../components/home/MisionVisionValores.jsx'

export const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className='bg-[#eeeeee] dark:bg-[#282c34]'>
      <Hero />
      {/* <Candidato /> */}
      <Team />
      <MisionVisionValores />
      <Secretarias />
      <Projects />
      <Footer />
    </div>
  )
}
