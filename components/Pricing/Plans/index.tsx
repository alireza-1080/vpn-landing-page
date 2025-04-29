import React from 'react'
import PlanItem from './PlanItem'

const Plans = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
        <PlanItem title='Free'></PlanItem>
        <PlanItem title='Gold'></PlanItem>
        <PlanItem title='Platinum'></PlanItem>
    </div>
  )
}

export default Plans