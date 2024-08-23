"use client"
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { moduleState } from '../Provider'

const Topbar = () => {
  const router = useRouter()
    const content = ["builder","dummy","dummy"]
    const [module,setModule] = useRecoilState(moduleState)
    function clickButton(){
      if(module.title === ""){
        alert("please insert some inputs")
      }else{
        router.push("/fullpagepreview")
      }
    }
  return (
    <div className='flex justify-between border px-24 py-2 '>
      <div className='flex gap-4 '>
        {content.map((item,index)=>(
            <Button key={index} variant="outline">{item}</Button>
        ))}
    </div>
    <Button onClick={clickButton}>Done</Button>
    </div>
  )
}

export default Topbar