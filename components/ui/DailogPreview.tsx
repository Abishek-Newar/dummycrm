"use client"
import React, { useState } from 'react'

const DailogPreview = () => {
    const [title,setTitle]  = useState();
    const [description,setDescription] = useState();
    
  return (
    <div className='min-h-full w-[25%] border'>
        <div className='w-full h-[30%]'>
            Video
        </div>
        <div>
            <h1>Title: {title}</h1>
            <h1>Decription: {description}</h1>
        </div>
    </div>
  )
}

export default DailogPreview