import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null

  return (
    <div className='p-5 w-48 shadow-lg'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Trending</li>
        <li>Subscription</li>
      </ul>
      <h1 className='pt-3 font-bold'>Subscription</h1>
      <ul className='pl-2'>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar