import React from 'react'

function PlanCard({bgColor, imgSrc, title, price}) {
  return (
    <div className=' w-36 h-36 rounded-lg border-2 flex flex-col justify-between '>
        <img  className="pl-4 pt-4 w-8 h-8 rounded-full" src="" alt="TESTING" />
        <div className='pb-4 pl-4'>
            <p>TESTING</p>
            <p>$9/mo</p>
        </div>
    </div>
  )
}

export default PlanCard