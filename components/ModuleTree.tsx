"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import DialogBox from './DialogBox'
  
const ModuleTree = () => {
    const [loading,setLoading] = useState(false)
    const [module,setModule] = useState({
        title: "Enter your title",
        description: "Enter your description",
        modules: [{
            title: "",
            description: "",
            videoURl: "",
            supportingFilesURl: ""
        }]
    })

    function addModule(){
        setLoading(true)
        let tempModule = module;
        tempModule.modules.push({
            title: "",
            description: "",
            videoURl: "",
            supportingFilesURl: ""
        })
        setModule(tempModule)
        setLoading(false)
    }
    useEffect(()=>{
        console.log(module)
    },[module])
  return (
    <div className='w-full flex flex-col items-center p-10 gap-10'>
        <Input placeholder='Title' />
        <Textarea placeholder='Enter Description' />
        {
            loading?
            <h1>LOading...</h1>:
            module.modules.map((item,index)=>(
                <div key={index} className='flex flex-col items-start border w-full p-7'>
                    <div>Module {index+1} - {item.title}</div>
                    <div>{item.description}</div>
                    <Button className='w-full '> 
                        <DialogBox />
                    </Button>
                </div>
            ))
        }
        <Button onClick={addModule} variant="outline"> + </Button>
    </div>
  )
}

export default ModuleTree