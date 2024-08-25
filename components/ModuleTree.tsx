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
const ModuleTree = ({title,titleChange}:{title:string,titleChange: (e:any)=>void}) => {
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
        titleChange(event)
    }
    useEffect(() => {
        console.log(module)
    }, [module])

   
    return (
        <div className='w-full flex flex-col items-center overflow-y-auto h-[90vh] p-6 gap-10'>
            {loading ?
                <h1>Loading...</h1> :
                <>
                    <Input placeholder='Title' onChange={addTitle} />
                    <div className='w-full'>
                    <MarkdownEditor value={module.description} onChange={(value: any) => { setModule({ ...module, description: value }) }} placeholder="Enter Description" />
                    </div>
                    {
                        loading ?
                            <h1>Loading...</h1> :
                            module.modules.map((item, Mindex) => (
                                <div key={Mindex} className='flex flex-col items-start border w-full gap-4 p-7 rounded-md'>
                                    <div className='flex items-center gap-6'>
                                    <div className='flex justify-center items-center rounded-full w-10 h-10 border'>{Mindex + 1}</div>
                                    <EditableTitle index={Mindex} />
                                    </div>
                                    <ul>
                                        {item.lesson.map((item,index)=>(
                                            <div key={index}>
                                                {
                                                    //@ts-ignore
                                                    <EditableDialogBox Mindex={Mindex} Index={index} title={item.title} />
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
                    <Button onClick={addModule} variant="outline" className="w-full"> + </Button></>
            }
        </div>
    )
}

export default ModuleTree