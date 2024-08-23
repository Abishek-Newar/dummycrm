"use client"
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import DialogBox from './DialogBox'
import dynamic from 'next/dynamic';
import { moduleState } from './Provider'
import { Button } from './ui/button'
import EditableTitle from './ui/EditableTitle'
import { Input } from './ui/input'
import EditableDailogPreview from './ui/EditableDialogPreview';
import EditableDialogBox from './EditableDialogBox';

const MarkdownEditor = dynamic(() => import('./MarkdownEditor'), { ssr: false });
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
                    title: "chapter",
                    description: "",
                    lesson: []
                }
            ]
        }));
        setLoading(false)
    }

    function addTitle(event:any){
        setModule({ ...module, title: event.target.value })
    }
    useEffect(() => {
        console.log(module)
    }, [module])

   
    return (
        <div className='w-full flex flex-col items-center p-10 gap-10'>
            {loading ?
                <h1>Loading...</h1> :
                <>
                    <Input placeholder='Title' onChange={addTitle} />
                    <div className='w-full'>
                    <MarkdownEditor value={module.description} onChange={(value: any) => { setModule({ ...module, description: value }) }} placeholder="Enter Description" />
                    </div>
                    {
                        loading ?
                            <h1>LOading...</h1> :
                            module.modules.map((item, Mindex) => (
                                <div key={Mindex} className='flex flex-col items-start border w-full p-7'>
                                    <div className='flex '><div>Module {Mindex + 1} - </div>
                                        <EditableTitle index={Mindex} />
                                    </div>
                                    <ul>
                                        {item.lesson.map((item,index)=>(
                                            <div key={index}>
                                                {
                                                    //@ts-ignore
                                                    <span>- <EditableDialogBox Mindex={Mindex} Index={index} title={item.title} /></span>
                                                }
                                            </div>
                                        ))}
                                    </ul>
                                    <div className='w-full'>
                                    <DialogBox index={Mindex} />
                                    </div>
                                </div>
                            ))
                    }
                    <Button onClick={addModule} variant="outline"> + </Button></>
            }
        </div>
    )
}

export default ModuleTree