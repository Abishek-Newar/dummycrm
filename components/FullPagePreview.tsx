"use client"
import React, { useState } from 'react'

import { moduleState } from "./Provider";
import { useRecoilState } from "recoil";
import MarkdownIt from 'markdown-it';
import { FaFileDownload } from 'react-icons/fa';

const md = new MarkdownIt();
const FullPagePreview = () => {
    const [module,setModule] = useRecoilState(moduleState)
    const [lesson,setLesson] = useState(module.modules[0].lesson[0])
    console.log(lesson?.videoURL)

    function setVideo(moduleIndex: number,index: number){
        setLesson(module.modules[moduleIndex].lesson[index])
    }
    console.log(module)
    return (
        <div className="flex w-screen min-h-screen">
            <div className='w-full'>
                <h1 className='text-center'>{lesson?.title}</h1>
                <video className='w-[60%] mx-auto' src={lesson?.videoURL || " "} controls></video>
                <div>
                    <h2 className='text-center'>Description</h2>
                    <div  className='p-10'><div dangerouslySetInnerHTML={{ __html: md.render(lesson?.description || " ") }} /></div>
                </div>
                <div>
          <p>support files</p>
          <a className="w-32" href={lesson?.supportFile.files} download={lesson?.supportFile.name}>
          {lesson?.supportFile.name} {
            lesson?.supportFile.name && <FaFileDownload />
          }
         </a>
        </div>
            </div>
            <aside className="w-[25%] min-h-screen border">
        <h1>Preview</h1>
        <p>title: {module.title}</p>
        {
          module.modules.map((item,Mindex)=>(
            <div key={Mindex}>
              <p className='cursor-pointer'>{item.title}</p>
              {item.lesson.map((item,index)=>(
                //@ts-ignore
                <p className='cursor-pointer' onClick={()=>setVideo(Mindex,index)} key={index}>- {item.title}</p>
              ))}
            </div>
          ))
        }
    </aside>
        </div>
    )
}

export default FullPagePreview