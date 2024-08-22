"use client"
import React from 'react'
import { useRecoilState } from 'recoil'
import { moduleState } from './Provider'
import MarkdownIt from 'markdown-it';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
const md = new MarkdownIt();

const PreviewBar = () => {
  const router = useRouter();
  const [module,setModule] = useRecoilState(moduleState)
  return (
    <aside className="w-[45%] min-h-screen border p-10">
        <h3 className='text-center'>Preview</h3>
        <p>title: {module.title}</p>
        {/* <div className='flex'><p>Description</p> <p dangerouslySetInnerHTML={{ __html: md.render(module.description) }} /></div> */}
        {
          module.modules.map((item,index)=>(
            <div key={index}>
              <p>{item.title}</p>
              {item.lesson.map((item,index)=>(
                //@ts-ignore
                <p key={index}>- {item.title}</p>
              ))}
            </div>
          ))
        }
        
    </aside>
  )
}

export default PreviewBar