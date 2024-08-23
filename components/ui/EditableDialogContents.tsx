import React from 'react'
import { Input } from './input'
import dynamic from 'next/dynamic';
const MarkdownEditor = dynamic(() => import('../MarkdownEditor'), { ssr: false });

const EditableDialogContents = ({title,titleChanges,description,setDescription,video,handleVideoUpload,file,handleFileUpload}:DailogPros) => {
  return (
    <div className='w-full'>
        <div className='w-full border p-10 flex flex-col gap-10'>
        <Input placeholder="title" value={title} onChange={titleChanges} />
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
    </div>
  )
}

export default EditableDialogContents