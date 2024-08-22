"use client"
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

const Topbar = () => {
  const router = useRouter()
    const content = ["builder","dummy","dummy"]
  return (
    <div className='flex justify-between border px-24 py-2 '>
      <div className='flex gap-4 '>
        {content.map((item,index)=>(
            <Button key={index} variant="outline">{item}</Button>
        ))}
    </div>
    <Button onClick={()=>router.push("/fullpagepreview")}>Done</Button>
    </div>
  )
}

export default Topbar