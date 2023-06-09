import { Hero } from '../components/home/Hero.jsx'
import { Team } from '../components/home/Team.jsx'
import { Projects } from '../components/home/Projects.jsx'
import { Footer } from '../components/commons/Footer'
import { Secretarias } from '../components/home/Secretarias.jsx'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className='bg-[#f7f8f9] dark:bg-[#282c34]'>
      <Hero />
      <Team />
      <Secretarias />
      <Projects />
      <Footer />
    </div>
  )
}
