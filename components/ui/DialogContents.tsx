"use client"
import dynamic from 'next/dynamic';
const MarkdownEditor = dynamic(() => import('../MarkdownEditor'), { ssr: false });
import { Input } from './input'

const DialogContents = ({title,titleChanges,description,setDescription,video,handleVideoUpload,file,handleFileUpload}: DailogPros) => {
  
  return (
    
      <div className='w-full border p-10 flex flex-col gap-10'>
        <Input placeholder="title" onChange={titleChanges} />
        <MarkdownEditor placeholder='Enter Description' value={description} onChange={setDescription} />
        <label className='border' >
          <h4>Video:</h4>
          <Input className='border' type='file' onChange={handleVideoUpload} />
        </label>
        <label>
          <h4>Support files</h4>
          <Input type='file' onChange={handleFileUpload} />
        </label>
      </div>
    

  )
}

export default DialogContents