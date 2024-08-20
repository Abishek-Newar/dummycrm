import React from 'react'
import { Input } from './input'
import { Textarea } from './textarea'

const DialogContents = () => {
  return (
    <div className='w-full border p-10 flex flex-col gap-10'>
        <Input  placeholder="title"/>
        <Textarea placeholder="enter description"/>
        <label className='border' >
        <h1>Video:</h1>
        <Input type='file' />
        </label>
        <label>
            <h1>Support files</h1>
        <Input type='file' />
        </label>
    </div>
  )
}

export default DialogContents