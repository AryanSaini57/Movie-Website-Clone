import React from 'react'

function PagesBottom({handleBack, handleNext, pageNo}) {
  return (
    <div className='bg-gray-300 p-4 mt-8 rounded-xl flex justify-center'>
        <div onClick={handleBack} className='hover:cursor-pointer hover:text-red-500 text-2xl'><i className="fa-solid fa-arrow-left"></i></div>
        <div className='px-8 font-bold text-2xl'>{pageNo}</div>
        <div onClick={handleNext} className='hover:cursor-pointer hover:text-red-500 text-2xl'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default PagesBottom