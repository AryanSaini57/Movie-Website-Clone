import React from 'react'

function Banner() {
  return (
    <div className='h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage: 'url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)'}}>
        <div className='text-white text-center bg-red-600/90 w-full p-3 rounded-l font-bold text-xl'>AVENGERS ENDGAME</div>
    </div>
  )
}

export default Banner