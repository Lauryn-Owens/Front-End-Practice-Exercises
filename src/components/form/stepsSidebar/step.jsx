import React from 'react'

function Step({stepNumber, stepText}) {
  return (
    <div className='flex items-center gap-4 uppercase tracking-wide '>
        <div className='bg-blue-900 flex justify-center items-center
        rounded-full h-10 w-10
        border-[0.1rem] border-white
        font-bold text-lg'
        style={{backgroundColor: stepNumber === 1 ? 'lightblue' : 'initial'}}
        >
            {stepNumber}
        </div>
        <div>
            <p className='text-blue-600'>Step {stepNumber}</p>
            <p className='text-white font-md'>{stepText}</p>
        </div>
    </div>
  )
}

export default Step