import { FirstCardPromises } from '../components/promises/FirstCardPromises'
import { SecondCardPromises } from '../components/promises/SecondCardPromises'
import { Banner } from '../components/promises/Banner'
import { Footer } from '../components/commons/Footer'
import bannerData from '../components/promises/banner.json'

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
      <div className='compromiso__total-container'>
        <div id='banner'>
          <Banner json={bannerData} />
        </div>
        <section className='flex items-center flex-col'>
          <div className='w-full bg-[#f7f8f9] dark:bg-[rgb(55,65,81)]' id='finance'>
            <FirstCardPromises />
          </div>
          <div className='w-full bg-[#ffffff] dark:bg-[#282c34]' id='identity'>
            <SecondCardPromises />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
