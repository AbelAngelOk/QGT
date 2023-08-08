import plans from './plan01.json'
import title from './plan01-const.json'

import { Plan } from './Plan01'

export function PlanSection () {
  return (
    <section id='plan01' className='w-full px-3 py-8'>
      <h2 className='w-full text-center text-4xl text-black dark:text-white'> {title.title} </h2>
      <div id='plan01-plans' className='h-4/5 flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-center gap-16 lg:gap-10 mx-auto mt-10'>
        {plans.map(plan => {
          return (
            <Plan plan={plan} key={plan.id} />
          )
        })}
      </div>
    </section>
  )
}
