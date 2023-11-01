import React from 'react'

const ButtonList = () => {
  const btn=[
    "sports",
    "music",
    "football",
    "premier league",
    "rap",
    "podcast",
    "kendrick",
    "kanye west",
    "indian cricket"
  ]

  return (
    <div className=' shadow-lg'>
      {
        btn.map((name,index)=>(
          <button className='p-2 m-4 bg-slate-400 rounded-lg ' key={index}>{name}</button>
        )) 
      }
    </div>
  )
}

export default ButtonList