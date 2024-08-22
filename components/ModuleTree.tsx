"use client"
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import DialogBox from './DialogBox'
import MarkdownEditor from './MarkdownEditor'
import { moduleState } from './Provider'
import { Button } from './ui/button'
import EditableTitle from './ui/EditableTitle'
import { Input } from './ui/input'

const ModuleTree = () => {
    const [loading, setLoading] = useState(false)
    const [module, setModule] = useRecoilState(moduleState)

    async function addModule() {
        setLoading(true)
        setModule((prevModule) => ({
            ...prevModule,
            modules: [
                ...prevModule.modules,
                {
                    title: "",
                    description: "",
                    lesson: []
                }
            ]
        }));
        setLoading(false)
    }
    useEffect(() => {
        console.log(module)
    }, [module])

   
    return (
        <div className='w-full flex flex-col items-center p-10 gap-10'>
            {loading ?
                <h1>Loading...</h1> :
                <>
                    <Input placeholder='Title' onChange={(e) => { setModule({ ...module, title: e.target.value }) }} />
                    <div className='w-full'>
                    <MarkdownEditor value={module.description} onChange={(value: any) => { setModule({ ...module, description: value }) }} placeholder="Enter Description" />
                    </div>
                    {
                        loading ?
                            <h1>LOading...</h1> :
                            module.modules.map((item, index) => (
                                <div key={index} className='flex flex-col items-start border w-full p-7'>
                                    <div className='flex '><div>Module {index + 1} - </div>
                                        <EditableTitle index={index} />
                                    </div>
                                    <ul>
                                        {item.lesson.map((item,index)=>(
                                            <div key={index}>
                                                {
                                                    //@ts-ignore
                                                    item.title && <li key={index}>{item.title}</li>
                                                }
                                            </div>
                                        ))}
                                    </ul>
                                    <Button className='w-full '>
                                        <DialogBox index={index} />
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