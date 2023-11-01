import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants'

const VideoContainer = () => {
  const getVideo=async()=>{
    const res=await fetch(YOUTUBE_API)
    const json=await res.json()
    console.log(json)
  }
  useEffect(()=>{
    getVideo()
  },[])

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer