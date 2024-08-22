"use client"
import React, { useState } from 'react'
import { Input } from './input'
import { Textarea } from './textarea'
import { useRecoilState } from 'recoil'
import { videoState } from '../Provider'
import DailogPreview from '../DailogPreview'
import MarkdownEditor from '../MarkdownEditor'

const DialogContents = ({title,titleChanges,description,setDescription,video,handleVideoUpload,file,handleFileUpload}: DailogPros) => {
  
  return (
    
      <div className='w-full border p-10 flex flex-col gap-10'>
        <Input placeholder="title" onChange={titleChanges} />
        <MarkdownEditor placeholder='Enter Description' value={description} onChange={setDescription} />
        <label className='border' >
          <h1>Video:</h1>
          <Input type='file' onChange={handleVideoUpload} />
        </label>
        <label>
          <h1>Support files</h1>
          <Input type='file' onChange={handleFileUpload} />
        </label>
      </div>
    

  )
}

export default DialogContents