import { CardPromises } from '../components/promises/CardPromises'
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
      <div className='flex center flex-col bg-[#ffffff] dark:bg-[#282c34]'>
        <div id='banner'>
        </div>
        <section className='flex items-center flex-col'>
          <div className='w-full bg-[#f7f8f9] dark:bg-[rgb(55,65,81)]' id='finance'>
            <CardPromises />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
