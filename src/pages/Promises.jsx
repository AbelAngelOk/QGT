import FirstCardPromises from '../components/promises/FirstCardPromises'
import SecondCardPromises from '../components/promises/SecondCardPromises'
import { Banner } from '../components/promises/Banner'
import { Footer } from '../components/commons/Footer'

import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Promises = () => {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div>
      <div>
        <div id='banner'>
          <Banner />
        </div>
        <section className='flex items-center bg-[#282c34] flex-col'>
          <div className='bg-[rgb(55,65,81)] w-full' id='finance'>
            <FirstCardPromises />
          </div>
          <div id='identity'>
            <SecondCardPromises />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
