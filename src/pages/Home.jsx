import { Hero } from '../components/home/Hero.jsx'
import { SimpleBoxes01 as Team } from '../components/home/SimpleBoxes01.jsx'
import { Projects } from '../components/home/Projects.jsx'
import { Secretarias } from '../components/home/Secretarias.jsx'
import { Service } from '../components/home/Service.jsx'
import { MisionVisionValores } from '../components/home/MisionVisionValores.jsx'
import { Footer } from '../components/commons/Footer.jsx'
import { Contact01 } from '../components/home/contact01.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className='bg-[#eeeeee] dark:bg-[#282c34]'>
      <Hero />
      <Team />
      <Service />
      <MisionVisionValores />
      <Secretarias />
      <Projects />
      <Contact01 />
      <Footer />
    </div>
  )
}
