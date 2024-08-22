"use client"
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import DialogBox from './DialogBox'
import MarkdownEditor from './MarkdownEditor'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { moduleState } from './Provider'
  
const ModuleTree = () => {
    const [loading,setLoading] = useState(false)
    const [module,setModule] = useRecoilState(moduleState)

    async function addModule(){
        setLoading(true)
        setModule((prevModule) => ({
            ...prevModule,
            modules: [
              ...prevModule.modules,
              {
                title: "",
                description: "",
                videoURl: "",
                supportingFilesURl: ""
              }
            ]
          }));
        setLoading(false)
    }
    useEffect(()=>{
        console.log(module)
    },[module])
  return (
    <div className='w-full flex flex-col items-center p-10 gap-10'>
        {loading? 
        <h1>Loading...</h1>:
        <>
        <Input placeholder='Title'  onChange={(e)=>{setModule({...module,title:e.target.value})}}/>
        <MarkdownEditor value={module.description} onChange={(value: any)=>{setModule({...module,description: value})}} placeholder="Enter Description"/>
        {
            loading?
            <h1>LOading...</h1>:
            module.modules.map((item,index)=>(
                <div key={index} className='flex flex-col items-start border w-full p-7'>
                    <div>Module {index+1} - {item.title}</div>
                    <div>{item.description}</div>
                    <Button className='w-full '> 
                        <DialogBox  index={index} />
                    </Button>
                </div>
            ))
        }
        <Button onClick={addModule} variant="outline"> + </Button></>
      }
    </div>
  )
}

export default ModuleTree