import { simpleBoxes02 as BoxesHero } from '../components/reports/simpleBoxes02'
import { table01 as ListReports } from '../components/reports/table01'
import { Footer } from '../components/commons/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Reports = () => {
  const location = useLocation()

  // Para que al redirigirnos a esta página, comience arriba de todo.

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <BoxesHero />
      <ListReports />
      <Footer />
    </>
  )
}
