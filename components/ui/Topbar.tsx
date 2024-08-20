import React from 'react'
import { Button } from './button'

const Topbar = () => {
    const content = ["builder","dummy","dummy"]
  return (
    <div className='flex gap-4 border px-24 py-2'>
        {content.map((item,index)=>(
            <Button key={index} variant="outline">{item}</Button>
        ))}
    </div>
  )
}

export default Topbar