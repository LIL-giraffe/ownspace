import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch()
  const toogleMenuHandler=()=>{
    dispatch(toogleMenu())
  }


  return (
    <div className='flex justify-between p-5 shadow-lg '>
      <div className=''>
        <button className='cursor-pointer mr-4' onClick={()=>toogleMenuHandler()}><MenuIcon/></button>
        <button><YouTubeIcon/></button>
      </div>
      <div className=' border-black shadow-lg  rounded-full'>
        <input type="text" placeholder='Search' className=' border-gray-400 w-96 px-4 rounded-l-full' />
        <button className=' border-gray-400 rounded-r-full'><SearchIcon/></button>
      </div>
      <div>
        <PersonIcon/>
      </div>
    </div>
  )
}

export default Head