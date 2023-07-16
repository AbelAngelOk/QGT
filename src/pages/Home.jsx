import { Hero } from '../components/home/Hero.jsx'
import { SimpleBoxes01 } from '../components/home/SimpleBoxes01.jsx'
import { Projects } from '../components/home/Projects.jsx'
import { Secretarias } from '../components/home/Secretarias.jsx'
import { MisionVisionValores } from '../components/home/MisionVisionValores.jsx'
import { Footer } from '../components/commons/Footer'

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
      <SimpleBoxes01 /> 
      <MisionVisionValores />
      <Secretarias />
      <Projects />
      <Footer />
    </div>
  )
}
